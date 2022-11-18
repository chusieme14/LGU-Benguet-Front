<template>
      <section class="browse-main-details">
        <h1>
          {{project.name}}
        </h1>
        <div class="browse-custome-table">
          <div class="item">
            <label>Location&#8239;:</label>
            <h3 v-for="(brgy, index) in project.barangays" :key="brgy.name">
              {{brgy.complete_address}}{{index == project.barangays.length -1 ? '' : ','}}
            </h3>
          </div>
          <div class="item">
            <label>Classification&#8239;:</label>
            <h3>{{project.classification}}</h3>
          </div>
          <div class="item">
            <label>Project Type&#8239;:</label>
            <h3 v-for="(type,index) in project.types" :key="type.name">
              {{type.name}}{{index == project.types.length -1 ? '' : ','}}
            </h3>
          </div>
          <div class="item">
            <label>Appropriation&#8239;:</label>
            <h3>Php {{project.appropriation}}</h3>
          </div>
          <div class="item">
            <label>Fund Source&#8239;:</label>
            <h3>{{project.fund_source}}</h3>
          </div>
          <div class="item">
            <label>Contract Reference Number&#8239;:</label>
            <h3>{{project.program_of_work ? project.program_of_work.contract_reference_number : ''}}</h3>
          </div>
          <div class="item">
            <label>Starting Date&#8239;:</label>
            <h3>Upon Approval</h3>
          </div>
          <div class="item">
            <label>Days to Complete&#8239;:</label>
            <h3>{{project.program_of_work ? project.program_of_work.days_to_complete : 0}} Working Days</h3>
          </div>
          <div class="item">
            <label>Total Mandays&#8239;:</label>
            <h3>{{project.mandays}} Man-days</h3>
          </div>
          <div class="item">
            <label>Implementation&#8239;:</label>
            <h3></h3>
          </div>
          <div class="item">
            <label>Contract&#8239;:</label>
            <h3>x</h3>
          </div>
          <div class="item">
            <label>Adm.&#8239;:</label>
            <h3></h3>
          </div>
          <div class="item">
            <label>Description&#8239;:</label>
            <h3 v-for="(dupa, index) in project.dupas" :key="index + 'dupas'">
              {{dupa.item_of_work.item_number}}{{index == project.dupas.length -1 ? '' : ','}}
            </h3>
          </div>
        </div>
      </section>

      <!-- <section class="browse-links">
        <div>
          <div class="browse-inn-wrap">
            <li class="csr">Summary</li>
            <li class="csr">program of work</li>
            <li class="csr">Detailed unit price</li>
            <li class="csr">plan</li>
            <li class="csr">Approved budget</li>
            <li class="csr">unit price summary</li>
            <li class="csr">PROCUREMENT</li>
          </div>
          <div class="browse-link-cont">
            adad
          </div>
        </div>
      </section> -->
</template>
<script>
export default {
  data(){
    return{
      project:{}
    }
  },
  async mounted(){
    await this.initialize()
  },
  methods:{
    async initialize(){
      let project = await this.$axios.get(`projects/${this.$route.params.id}`);
      console.log('params', project.data)
      this.project = project.data;
    }
  }
}
</script>
