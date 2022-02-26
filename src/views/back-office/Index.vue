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
    
       <nav class="nav_left" v-if="showbars">
       <ul>
         <li>  
         <fa :icon="['fa', 'house']" size="xs"/>
         Dashboard
         </li>
         <li>
         <fa :icon="['fa', 'user-tie']" size="xs"/> 
           Profiles
         </li>
         <li>
         <fa :icon="['fa', 'code']" size="xs"/>
           Configurations
         </li>
         <li>
         <fa :icon="['fa', 'user']" size="xs"/> 
           User
         </li> 
         <li>
          <fa :icon="['fa', 'users']" size="xs"/> 
           Member
          </li> 
         <li>
          <fa :icon="['fa', 'house']" size="xs"/>
          Article
         </li> 
       </ul>
     </nav> 
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
export default {
  name: 'Back_Office',
  components: {
    'app-footer':Footer,
    'app-header':Header
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

