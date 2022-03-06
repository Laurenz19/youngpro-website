<template>
   <div class="index">
   <app-header>
     <template v-slot:title>
       <div id="title">Young Professional</div>
       <fa class="togglebars_icon" v-if="showbars == false" :icon="['fa', 'bars']" size="lg" @click="toggleMenu"/>
       <fa class="togglebars_icon" v-if="showbars == true" :icon="['fa', 'xmark']" size="lg" @click="toggleMenu"/>
     </template>
     <template v-slot:header_nav_content>
      <div class="user_connected">
        Laurenzio
      </div>
     </template>
   </app-header>
   <main id="back" class="withSidebar" ref="main_content">
    
    <app-sidebar :showbars="showbars" :data="menu"/>
    <div id="content">
      <div class="content-header">
             <span>{{current_route}}</span>
             <div id="bulle">
               <div></div>
               <div></div>
             </div>  
             </div>
             <div id="main-content">
                <slot name="content">
    
                </slot>
             </div>
        
    </div>
   </main>
  
  <app-footer/>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { useRoute } from 'vue-router';

import Footer from './Footer.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
export default {
  name: 'Back_Template',
  components: {
    'app-footer':Footer,
    'app-header':Header,
    'app-sidebar':Sidebar
  },
  props:{
      menu:Array
  },
  setup(){
    let showbars = ref(true)
    let main_content = ref(null)
    
    const current_route = computed(()=>{
      return useRoute().name
    })

    let toggleMenu = ()=>{
       if(showbars.value == false){
        main_content.value.classList.add('withSidebar')
        main_content.value.classList.remove('noSidebar')
        console.log(main_content)
      }else{
        main_content.value.classList.remove('withSidebar')
        main_content.value.classList.add('noSidebar')
      }
      showbars.value = ! showbars.value
    }
    return{
      showbars, toggleMenu, main_content, current_route
    }
  }
}
</script>

<style scoped>
  @import url('../assets/css/front.css');
  @import url('../assets/css/back.css');
</style>

