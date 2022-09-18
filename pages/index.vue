<template>
  <div>
    <div class="benguit-image">
      <div class="description">
        <div class="mb-6">
          <h1>MUNICIPAL ENGINEERING OFFICE (MEO)</h1>
        </div>
        <div>
          <h2>La Trinidad, Benguet</h2>  
        </div>
        <h4>The Strawberry and Rose Capital of the Philippines</h4>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .benguit-image{
    /* background-color: red; */
    width: 100%;
    height: 78vh;
    background-image: url('~@/static/images/hero-img.jpg')  ;
    background-size: 100%;
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
</style>