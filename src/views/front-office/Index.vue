<template>
  <div class="index">
   <header>
     <div id="title">Young Professional</div>
     <nav id="app-nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Our team</li>
        <li>Forum</li>
        <li>Contact</li>
      </ul>
     </nav>
   </header>
   <main>
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
export default {
  name: 'Index',
  components: {
    'app-footer':Footer
  }
}
</script>

<style>
  @import url('../../assets/css/front.css');
</style>
