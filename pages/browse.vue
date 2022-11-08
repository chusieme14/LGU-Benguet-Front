<template>
    <div class="browse-table">
        <section class="table-wrapper">
            <template>
                <v-card>
                    <v-card-title>
                    projects for implementation
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                    <button class="table-filter" type="">
                        <v-icon dark>
                            mdi-account
                        </v-icon>
                        Filter
                    </button>
                    </v-card-title>
                    <v-data-table
                    :headers="headers"
                    :items="projects"
                    :search="search"
                    ></v-data-table>
                </v-card>
            </template>
        </section>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'PROJECT NAME',
            align: 'start',
            sortable: true,
            value: 'proj_name',
          },
          { text: 'PROJECT TYPE', value: 'proj_type' },
          { text: 'LOCATION', value: 'proj_location' },
          { text: 'FUND SOURCE', value: 'proj_fund_src' },
          { text: 'APPROPRIATION', value: 'proj_app' },
          { text: 'TOTAL DAYS TO COMPLETE', value: 'proj_total_days' },
          { text: 'CONTRACTOR', value: 'proj_contr' },
        ],
        projects: [
          {
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_type: 'Road',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_app: 'P 1,000,000.00',
            proj_total_days: '100 Days',
            proj_contr: '100 Days',
          },
          {
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_type: 'Road',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_app: 'P 1,000,000.00',
            proj_total_days: '100 Days',
            proj_contr: '100 Days',
          },
          {
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_type: 'Road',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_app: 'P 1,000,000.00',
            proj_total_days: '100 Days',
            proj_contr: '100 Days',
          },
          {
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_type: 'Road',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_app: 'P 1,000,000.00',
            proj_total_days: '100 Days',
            proj_contr: '100 Days',
          },
          {
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_type: 'Road',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_app: 'P 1,000,000.00',
            proj_total_days: '100 Days',
            proj_contr: '100 Days',
          },
          {
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_type: 'Road',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_app: 'P 1,000,000.00',
            proj_total_days: '100 Days',
            proj_contr: '100 Days',
          },
          {
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_type: 'Road',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_app: 'P 1,000,000.00',
            proj_total_days: '100 Days',
            proj_contr: '100 Days',
          },
          {
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_type: 'Road',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_app: 'P 1,000,000.00',
            proj_total_days: '100 Days',
            proj_contr: '100 Days',
          },
          {
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_type: 'Road',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_app: 'P 1,000,000.00',
            proj_total_days: '100 Days',
            proj_contr: '100 Days',
          },
          {
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_type: 'Road',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_app: 'P 1,000,000.00',
            proj_total_days: '100 Days',
            proj_contr: '100 Days',
          },
        ],
      }
    },
  }
</script>