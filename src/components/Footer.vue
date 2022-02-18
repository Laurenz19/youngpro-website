<template>
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
</template>

<script>
export default {
    name:"Footer"
}
</script>