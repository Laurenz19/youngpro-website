<template>
    <header>
     <slot name="title">

     </slot>   
     <nav id="app-nav">
         <slot name="header_nav_content">

         </slot>
     </nav>
   </header>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style>

</style>