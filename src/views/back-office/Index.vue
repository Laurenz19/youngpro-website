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
      hello
    </div>
   </main>
  
  <app-footer/>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue'
import Sidebar from '../../components/Sidebar.vue'
export default {
  name: 'Back_Office',
  components: {
    'app-footer':Footer,
    'app-header':Header,
    'app-sidebar':Sidebar
  },
  data(){
    return{
      menu:[
        {label:"Dashboard", icon:['fa', 'house'], iconsize:'xs', routeName:''},
        {label:"Profile", icon:['fa', 'user-tie'], iconsize:'xs', routeName:''},
        {label:"Setting up", icon:['fa', 'code'], iconsize:'xs', routeName:''},
        {label:"Users", icon:['fa', 'user'], iconsize:'xs', routeName:''},
        {label:"Members", icon:['fa', 'users'], iconsize:'xs', routeName:''},
        {label:"Article", icon:['fa', 'house'], iconsize:'xs', routeName:''},
      ]
    }
  },
  setup(){
    let showbars = ref(true)
    let main_content = ref(null)

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
      showbars, toggleMenu, main_content
    }
  }
}
</script>

<style scoped>
  @import url('../../assets/css/front.css');
  @import url('../../assets/css/back.css');
</style>

