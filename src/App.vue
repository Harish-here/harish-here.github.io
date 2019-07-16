<template>
  <div id="app" class='flex flex-column'>
    <header id="nav" class='flex justify-between items-center'>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/search">search</router-link> -->
      <div>
        
      </div>
      <div></div>
    </header>
    <section id='action-area' class='flex flex-auto justify-center'>
      <div class="w-60 h-100 bg-gray">
        <router-view/>
      </div>
    </section>
    
  </div>
</template>
<script>
export default {
  name: 'root',

}
</script>


<style src='./assets/bts.css'>

</style>
