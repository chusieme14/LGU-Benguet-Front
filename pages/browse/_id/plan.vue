<template>
  <div class="browse-link-inner-cont">
    <h2>Plan</h2>
    <div class="plan-images">
      <div class="item">
        <img src="/images/asset1-100.png" alt="">
      </div>
      <div class="item">
        <img src="/images/asset2-100.png" alt="">
      </div>
      <div class="item">
        <img src="/images/asset3-100.png" alt="">
      </div>
      <div class="item">
        <img src="/images/asset4-100.png" alt="">
      </div>
      <!-- <div class="item">
        <img src="/images/asset5-100.png" alt="">
      </div>
      <div class="item">
        <img src="/images/asset6-100.png" alt="">
      </div>
      <div class="item">
        <img src="/images/asset7-100.png" alt="">
      </div> -->
    </div>
  </div>
</template>
<script>
// import List from "@/components/browse/plan/list.vue"
export default {
  components:{
    // List
  },
  data(){
    return {
      file:[]
    }
  },
  mounted(){
    this.initialize()
  },
  methods:{
    initialize(){
      this.$axios.get(`project-files/${this.$route.params.id}/1`).then(({data})=>{
        this.files = data
        console.log(data, 'files')
      })
    }
  }
}
</script>
