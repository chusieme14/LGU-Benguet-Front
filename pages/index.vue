<template>
  <div class="index-page">
    <div class="benguit-image">
      <div class="description">
        <div class="mb-6">
          <h1>MUNICIPAL ENGINEERING OFFICE (MEO)</h1>
        </div>
        <div>
          <h2>La Trinidad, Benguet</h2>
        </div>
        <h4>The Strawberry and Rose Capital of the Philippines</h4>
        <div class="banner-btns">
          <button class="solid-transparent csr" type="" @click="goTo('building-permit-forms')">Building Permit Forms</button>
          <button class="btn-yellow csr" @click="goTo('browse')">Browse projects</button>
        </div>
      </div>
    </div>
    <div class="main-margin projects-count">
      <v-container class="mt-10">
        <!-- <v-layout row>
          <v-flex xs4>
            <h3>Requested Projects</h3>
            <div
              style="display:flex;"
              class="mt-4"
            >
              <div>4,540 projects</div>
              <div>asdas</div>
            </div>
          </v-flex>
          <v-flex xs4>
            asdasd
          </v-flex>
          <v-flex xs4>
            asdasd
          </v-flex>

        </v-layout> -->

        <div class="project-wrapper">
          <div class="project-item">
            <div class="folder-photo">
              <img
                src="/images/file-storage.png"
                alt=""
              >
            </div>
            <div class="project-content">
              <h2>
                Requested Projects
              </h2>
              <div class="info-wrapper">
                <div class="info-item">
                  <h4>4,540 Projects</h4>
                  <div class="project-price">
                    <small>PHP</small>
                    <h3>36.38 B</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="project-item">
            <div class="folder-photo">
              <img
                src="/images/file-storage.png"
                alt=""
              >
            </div>
            <div class="project-content">
              <h2>
                Projects with Released Budget*
              </h2>
              <div class="info-wrapper">
                <div class="info-item">
                  <h4>DPWH:</h4>
                  <div class="project-price">
                    <small>PHP</small>
                    <h3>4.46 B</h3>
                  </div>
                </div>
                <div class="info-item">
                  <h4>DILG:</h4>
                  <div class="project-price">
                    <small>PHP</small>
                    <h3>4.48 B</h3>
                  </div>
                </div>
                <div class="info-item">
                  <h4>All Agencies:</h4>
                  <div class="project-price">
                    <small>PHP</small>
                    <h3>85.5 B</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="project-item">
            <div class="folder-photo">
              <img
                src="/images/file-storage.png"
                alt=""
              >
            </div>
            <div class="project-content">
              <h2>
                Ongoing Projects (Public Works)*
              </h2>
              <div class="info-wrapper">
                <div class="info-item">
                  <h4>539 Projects</h4>
                  <div class="project-price">
                    <small>PHP</small>
                    <h3>3.91 BB</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </div>

    <div class="browse-table">
    <section class="table-wrapper">
      <h3 text-align="center">Approved Projects</h3>
      <template>
        <v-card>
          <v-data-table
          :headers="headers"
          :items="projects"
          :search="search"
          ></v-data-table>
        </v-card>
      </template>
    </section>
    </div>

    <div class=" main-margin landing-logo text-center ">
      <img src="/images/logo.svg" alt="logo" />
      <div class="my-2">
        <h2>La Trinidad, Benguet</h2>
      </div>
      <h4 class="">The Strawberry and Rose Capital of the Philippines</h4>
    </div>

    <div class="main-margin">
      <v-container>
        <div class="objectives">
          <div>
            <h2>Functional Statement</h2>
            <div class="mt-4 index-text">
              <div class="normal-text">
                The Municipal Engineering Office is primarily responsible in the administration and implementation of infrastructure development and public works project of the Local Government Unit.

              </div>
              <div class="mt-4 normal-text index-text" >
                The Municipal Engineer is also mandated to act as the Local Building Official. As such, he shall be responsible in the enforcement of the provisions of the National Building Code (PD 1096) and its IRR, such as, but not limited to the administrative control and/ or supervision of all activities relating to the processing & issuance of Building Permits and Certificates of Occupancy covering the construction, addition, repair, renovation and/or demolition of buildings/structures within the locality.
              </div>
              <div class="objective-logos" style="">
                <img
                  src="/images/transparency-seal.png"
                />

                <img
                  src="/images/foi-logo.png"
                />
              </div>
            </div>
          </div>
          <div>
            <h2>Objectives</h2>
            <div class="mt-4 index-text">
            <ol>
              <li>To initiate, review and recommend changes in policies and objectives, plans and programs, techniques, procedures and practices in infrastructure development and public works in general of the local government unit;</li>
              <li>Advise the Mayor in infrastructure, public works and other engineering matters;</li>
              <li>Administer, coordinate, supervise and control the construction, maintenance, improvement and repair/rehabilitation of public buildings, roads and bridges and other engineering and public projects of the local government;</li>
              <li>Provide engineering services to the local government unit concerned including technical investigation and survey, engineering design, feasibility studies and project management;</li>
              <li>Strict and impartial enforcement of the provisions of Building Code and its IRR, as well as circulars, memoranda, opinions and decisions/ orders issued pursuant thereto;</li>
              <li>Accomplish other duties and task of the Building Official as may be assigned by the DPWH Secretary from time to time;</li>
              <li>To exercise other powers and performance of such other duties and functions as may be prescribed by law or ordinance.</li>
            </ol>
            </div>
          </div>
        </div>
        <!-- <v-flex xs6> -->
        <!-- <h2 style=" margin-left:5%;">Objective</h2>
            <div style=" margin-left:5%;font-size: 19px;" class="mt-4">
              <span class="mr-4">1.</span>
              To initiate, review and recommend changes in policies and objectives, plans and programs, techniques, procedures and practices in infrastructure development and public works in general of the local government unit;
            </div>
            <div style=" margin-left:5%;font-size: 19px;" class="mt-4">
              <span class="mr-4">1.</span>
              To initiate, review and recommend changes in policies and objectives, plans and programs, techniques, procedures and practices in infrastructure development and public works in general of the local government unit;
            </div>
          </v-flex> -->
      </v-container>
    </div>

    <section class="building-permit-forms">
      <div class="main-margin">
        <v-container>
          <div>
            <h2>Building Permit Forms</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque gravida odio ac mollis sollicitudin.
            </p>
            <div class="file-wrapper">
              <div class="file-item" v-for="permit in permits" :key="permit.name">
                <a href="">
                  <h3 class="file-title text-uppercase">{{permit.name}}</h3>
                  <div class="file-content text-uppercase">
                    <div class="file-icon">
                      <img src="/images/pdf.png" alt="">
                    </div>
                    <div class="file-name">
                      <h4>{{permit.file_name}}</h4>
                      <small>
                        ({{permit.file_size}})
                      </small>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </v-container>
      </div>
    </section>



  </div>
</template>
<script>
export default {
  data(){
    return {
      permits: [
        {
          name: 'Building Permit',
          file_name:'BUILDING-PERMIT.pdf',
          file_size:'574 KB'
        },
        {
          name: 'SPOA',
          file_name:'SPOA.pdf',
          file_size:'574 KB'
        },
        {
          name: 'Sanitary Permit',
          file_name:'Sanitary-Permit.pdf',
          file_size:'574 KB'
        },
        {
          name: 'Office Order NO 1S2013',
          file_name:'Office-Order-NO-1S2013.pdf',
          file_size:'574 KB'
        },
        {
          name: 'Logbook',
          file_name:'Logbook.pdf',
          file_size:'574 KB'
        },
        {
          name: 'Electrical Permit',
          file_name:'electrical-PERMIT.pdf',
          file_size:'574 KB'
        },
        {
          name: 'Checklist',
          file_name:'checklist.pdf',
          file_size:'574 KB'
        },
        ],
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
  }
}
</script>
<style scoped lang="scss">
.benguit-image {
  /* background-color: red; */
  width: 100%;
  height: 90vh;
  background-image: url("~@/static/images/index-banner.jpg");
  background-size: cover;
  position: relative;
  text-align: center;
  color: white;
}

.benguit-image .description {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.description {
  h1 {
    @media (max-width: 600px) {
      font-size: 30px;
    }
  }
  h2 {
    @media (max-width: 600px) {
      font-size: 22px;
    }
  }
  h4 {
    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
}
</style>
