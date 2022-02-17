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
   <footer>
    <div id="copyright-info">
      Designed and developed by <span> Young professional Team </span>  | © 2022
    </div>
    <ul>
      <li> <fa :icon="['fab', 'facebook']" size="lg"/> </li>
      <li> <fa :icon="['fab', 'linkedin']" size="lg"/> </li>
      <li> <fa :icon="['fab', 'github']" size="lg"/> </li>
    </ul>
   </footer>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {

  }
}
</script>

<style>
  @import url('../../assets/css/front.css');
</style>
