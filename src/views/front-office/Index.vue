<template>
  <div class="index">
   <app-header>
      <template v-slot:title>
       <div id="title">Young Professional</div>
     </template>
     <template v-slot:header_nav_content>
       <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Our team</li>
        <li>Forum</li>
        <li>Contact</li>
      </ul>
     </template>
   </app-header>
   <main id="front">
     <div id="young-pro">
       young pro introduction
     </div>
     <div id="content">
       my content
     </div>

   </main>
  <app-footer/>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue'
export default {
  name: 'Front_Office',
  components: {
    'app-footer':Footer,
    'app-header':Header
  }
}
</script>

<style scoped>
  @import url('../../assets/css/front.css');
</style>
