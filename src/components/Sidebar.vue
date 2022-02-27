<template>
    <nav class="nav_left" v-if="showbars">
       <ul>
         <li v-for="page in data" :key="page">
             <fa :icon="page.icon" :size="page.iconsize"/>
             {{page.label}}    
         </li>  
       </ul>
     </nav> 
</template>

<script>
export default {
    name:"Sidebar",
    props:{
        showbars:Boolean,
        data:Array
    }
}
</script>
