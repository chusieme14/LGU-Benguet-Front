<template>
    <div class="browse-table">
        <section class="table-wrapper">
            <template>
                <v-card>
                    <v-card-title>
                    projects for implementation
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                    <v-spacer></v-spacer>
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
          { text: 'ID', value: 'proj_id' },
          { text: 'LOCATION', value: 'proj_location' },
          { text: 'FUND SOURCE', value: 'proj_fund_src' },
          { text: 'DESCRIPTION', value: 'proj_description' },
          { text: 'STATUS', value: 'proj_status' },
        ],
        projects: [
          {
            proj_id: '0001',
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_description: 'B5, SPL. A, SPL. B, 801(1)a,103, 404, 903(2), 900(1)c2, 102, 500(5)',
            proj_status: 'Approved',
          },
          {
            proj_id: '0001',
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_description: 'B5, SPL. A, SPL. B, 801(1)a,103, 404, 903(2), 900(1)c2, 102, 500(5)',
            proj_status: 'Approved',
          },
          {
            proj_id: '0001',
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_description: 'B5, SPL. A, SPL. B, 801(1)a,103, 404, 903(2), 900(1)c2, 102, 500(5)',
            proj_status: 'Approved',
          },
          {
            proj_id: '0001',
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_description: 'B5, SPL. A, SPL. B, 801(1)a,103, 404, 903(2), 900(1)c2, 102, 500(5)',
            proj_status: 'Approved',
          },
          {
            proj_id: '0001',
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_description: 'B5, SPL. A, SPL. B, 801(1)a,103, 404, 903(2), 900(1)c2, 102, 500(5)',
            proj_status: 'Approved',
          },
          {
            proj_id: '0001',
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_description: 'B5, SPL. A, SPL. B, 801(1)a,103, 404, 903(2), 900(1)c2, 102, 500(5)',
            proj_status: 'Approved',
          },
          {
            proj_id: '0001',
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_description: 'B5, SPL. A, SPL. B, 801(1)a,103, 404, 903(2), 900(1)c2, 102, 500(5)',
            proj_status: 'Approved',
          },
          {
            proj_id: '0001',
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_description: 'B5, SPL. A, SPL. B, 801(1)a,103, 404, 903(2), 900(1)c2, 102, 500(5)',
            proj_status: 'Approved',
          },
          {
            proj_id: '0001',
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_description: 'B5, SPL. A, SPL. B, 801(1)a,103, 404, 903(2), 900(1)c2, 102, 500(5)',
            proj_status: 'Approved',
          },
          {
            proj_id: '0001',
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_description: 'B5, SPL. A, SPL. B, 801(1)a,103, 404, 903(2), 900(1)c2, 102, 500(5)',
            proj_status: 'Approved',
          },
          {
            proj_id: '0001',
            proj_name: 'Road opening/improvement at pipingew II (Near Patinglad Res.)',
            proj_location: 'Lubas, La Trinidad, Benguet',
            proj_fund_src: '20% MDF, FY2022',
            proj_description: 'B5, SPL. A, SPL. B, 801(1)a,103, 404, 903(2), 900(1)c2, 102, 500(5)',
            proj_status: 'Approved',
          },
        ],
      }
    },
  }
</script>