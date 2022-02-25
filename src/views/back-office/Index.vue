<template>
   <div class="index">
   <app-header>
     <template v-slot:header_nav_content>
      <div class="user_connected">
        Laurenzio
      </div>
     </template>
   </app-header>
   <main id="back">
     <nav class="nav_left">
      <div id="user">
        
      </div>
      <hr> 
      <div id="menus">
        
      </div>
     </nav>
    <div id="content">
      hello
    </div>
   </main>
  
  <app-footer/>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue'
export default {
  name: 'Back_Office',
  components: {
    'app-footer':Footer,
    'app-header':Header
  }
}
</script>

<style>
  @import url('../../assets/css/front.css');
</style>

<style scoped>
  @import url('../../assets/css/back.css');
</style>
