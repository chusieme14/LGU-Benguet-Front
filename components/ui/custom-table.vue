<template>
    <div style="min-height: 70vh">
        <!-- header -->
        <div>
            <!-- <v-btn
        style="bottom: 72px;right: 9px;"
        color="#EBEE00"
        dense
        @click="$emit('add')"
        absolute
        bottom
        right
        fab
        >
        <v-icon>mdi-plus</v-icon>
        </v-btn> -->
            <v-speed-dial
                v-if="!hide.includes('floater-btn')"
                v-model="fab"
                bottom
                absolute
                dense
                right
                open-on-hover
                style="bottom: 72px;right: 9px;"
            >
                <template v-slot:activator>
                    <v-btn v-model="fab"  color="#EBEE00" dense fab>
                        <v-icon v-if="fab">
                            mdi-close
                        </v-icon>
                        <v-icon v-else>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </template>
                <v-btn fab dark small color="indigo"  @click="$emit('add')">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-btn fab dark small color="red" @click="batchDelete(selected)" >
                    <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
            </v-speed-dial>
        </div>

        <v-toolbar dense flat class="mb-5 py-3" v-if="!hide.includes('headers')">
            <v-toolbar-title>{{ data.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="mr-2">
                <v-text-field v-model="data.keyword" @keydown.enter="$emit('search')" @click:append="$emit('search')"
                    auto-select-first filled rounded hide-details="" :placeholder="'Search'" dense
                    append-icon="mdi-magnify">
                </v-text-field>
            </div>
            <slot class="mr-2 ml-2" name="generate_btn" />
            <v-menu offset-y left nudge-bottom="5" :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn small color="success" v-bind="attrs" v-on="on" @click.stop="drawer = true"
                        v-if="!hide.includes('filter')">
                        <v-icon small class="mr-2">mdi-filter-plus-outline</v-icon>
                        filter
                    </v-btn>
                </template>
                <v-card min-width="300">
                    <v-card-text>
                        <slot name="custom_filter" />
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="error" text @click="$emit('resetFilters')">
                            {{ "reset" }}
                        </v-btn>
                        <v-btn color="primary" depressed @click="$emit('filterRecord')">
                            {{ "filter" }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu>
            <!-- <v-btn small text @click="batchDelete(selected)" :disabled="!selected.length">
                <v-icon small class="mr-1">mdi-delete-outline</v-icon>
                delete
            </v-btn> -->
        </v-toolbar>
        <!-- end header -->
        <v-data-table v-model="selected" :headers="tableData.headers" :items="tableData.items" :single-select="false"
            show-select :search="data.keyword" :server-items-length="tableData.total" :options.sync="tableData.options"
            @click:row="selectRecord"
            :items-per-page="tableData.options.itemsPerPage" @update:options="$emit('fetchPage')"
            :loading="data.loading" class="cursor-pointer table-fix-height" fixed-header height="68.5vh">
            <template v-for="(head, index) of tableData.headers" v-slot:[`item.${head.value}`]="props">
                <td :props="props">
                    <slot :name="head.value" :item="props.item">
                        {{ props.item[head.value] || "..." }}
                    </slot>
                </td>
            </template>
            <template v-slot:item.action="{ item }">
                <div>
                    <slot name="custom-action" :item="item"> </slot>
                    <v-icon v-if="!hide.includes('edit')" color="primary" class="mr-1"
                        @click.stop="$emit('edit', item)">
                        mdi-pencil-outline
                    </v-icon>
                    <v-icon v-if="!hide.includes('delete')" color="error" class="mr-1" @click.stop="remove(item)">
                        mdi-delete-outline
                    </v-icon>
                    <!-- <v-btn
              icon
              color="error"
              v-if="!hide.includes('delete')"
              class="mr-1"
              @click.stop="deleteRecord(item)"
            >
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn> -->
                </div>
            </template>
        </v-data-table>
        <!-- <div class="text-center mt-10">
      <v-pagination
        color="#EBEE00"
        circle
        v-model="page"
        :length="6"
      ></v-pagination>
    </div> -->
    </div>
</template>
<script>
import pageHelper from '@/mixins/pageHelper.vue'
export default {
  mixins:[pageHelper],
    data() {
        return {
            selected: [],
            page: 1,
            fab:false
        };
    },
    props: {
        hide: {
            type: Array,
            default: () => {
                return [];
            },
        },
        // currentUrl: {
        //   type: String,
        // },
        // hideFooter: {
        //   type: Boolean,
        //   default: () => true,
        // },
        // showSelect: {
        //   type: Boolean,
        //   default: () => true,
        // },
        // loading: {
        //   type: Boolean,
        //   default: () => true,
        // },
        // title: {
        //   type: String,
        //   default: () => "",
        // },
        // headers: {
        //   type: Array,
        //   default: () => {
        //     return [];
        //   },
        // },
        data: {
            type: Object,
            default: () => {
                return [];
            },
        },
        tableData: {
            type: Object,
            default: () => {
                return {};
            },
        },
        searchPlaceholder: {
            type: String,
            default: () => "name, age",
        },
    },
    methods: {
      selectRecord(item){
        this.$emit('selectRecord', item)
      },
        edit(item) {
            this.$emit("edit", item);
        },
        async remove(val, bypass) {
            if (!bypass) if (!(await this.deleteRecord())) return;

            this.$emit("remove", val);
            this.selected = []
        },
        async batchDelete(selected) {
            // if (!await this.deleteRecord()) return
            let ids = selected.map((x) => x.id).toString();
            this.remove(ids);
        },
        // removeItem(items) {
        //   if (items.length > 0 || items.id) {
        //     items = items.length > 0 ? items : [items];
        //   }
        //   this.$emit("removeItem", items);
        // },
    },
};
</script>
