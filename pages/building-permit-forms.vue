<template>
    <div>
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
                        <a :href="permit.file" download="">
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
  auth:false,
  data(){
    return {
      permits: [
        {
          name: 'Building Permit',
          file_name:'BUILDING-PERMIT.pdf',
          file_size:'574 KB',
          file:'pdf/BUILDING-PERMIT.pdf'
        },
        {
          name: 'SPOA',
          file_name:'SPOA.pdf',
          file_size:'574 KB',
          file:'pdf/SPOA.pdf'
        },
        {
          name: 'Sanitary Permit',
          file_name:'Sanitary-Permit.pdf',
          file_size:'574 KB',
          file:'pdf/SANITARY-PERMIT.pdf'
        },
        {
          name: 'Office Order NO 1S2013',
          file_name:'Office-Order-NO-1S2013.pdf',
          file_size:'574 KB',
          file:'pdf/OFFICE-ORDER-NO-1S2013.pdf'
        },
        {
          name: 'Logbook',
          file_name:'Logbook.pdf',
          file_size:'574 KB',
          file:'pdf/LOGBOOK.pdf'
        },
        {
          name: 'Electrical Permit',
          file_name:'electrical-PERMIT.pdf',
          file_size:'574 KB',
          file:'pdf/ELECTRICAL-PERMIT.pdf'
        },
        {
          name: 'Checklist',
          file_name:'checklist.pdf',
          file_size:'574 KB',
          file:'pdf/CHECKLIST.pdf'
        },
        ],
    }
  }
}
</script>
