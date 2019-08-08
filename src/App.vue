<template>
  <div id="app" class='flex flex-column'>
    <header id="nav" class='flex justify-between items-center pa2 purple'>
      <!-- <router-link to="/">Home</router-link> | -->
      
      <div>
        <img width='75' src='./assets/picture.svg' />
      </div>
      <div class='flex items-center items-stretch b fw5'>
        <span class='pa1'>Surresh</span>
        <span class='pa1'><i class="fa fa-bell" aria-hidden="true"></i></span>
      </div>
    </header>
    <!-- <router-link to="/search">search</router-link> -->
    <section id='action-area' class='flex flex-auto justify-center'>
      <!-- bl br b--light-silver  -->
    
        <router-view/>
      
    </section>
    
  </div>
</template>
<script>
export default {
  name: 'root',
  created(){
   
  }

}
</script>


<style src='./assets/bts.css'>

</style>
