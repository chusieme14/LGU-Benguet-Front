<template>
  <div>
    <div class="browse-item-page">
    <div class="main-margin">
      <project-info></project-info>
      <sub-menu></sub-menu>
      <Nuxt></Nuxt>
    </div>
    </div>

  </div>
</template>
<script>
import projectInfo from '@/components/browse/projectInfo.vue'
import subMenu from '@/components/awarded-projects/subMenu.vue'
export default {
  components:{
    projectInfo,
    subMenu
  }
}
</script>
