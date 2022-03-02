<template>
    <nav class="nav_left" v-if="showbars">
       <ul>
         <li v-for="page in data" :key="page" :name="page.label" @mouseover="showLabel" @mouseleave="hideLabel">
             <router-link :to="{name:page.routeName}">
                 <fa :icon="page.icon" :size="page.iconsize" />
                 <span>{{page.label}}</span>
             </router-link>    
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
    },
    setup(){

        function checkClass(list, class_name){

            for (let i = 0; i < list.length; i++) {              
                if(list[i] == class_name){
                    return true
                }
             }
             return false
        }

        let showLabel= (event)=>{
       
        if(event.target.tagName == 'A'){
            
             if(checkClass(event.target.classList, 'active') == false){
                 event.target.classList.toggle('active');
             }

             if(checkClass(event.target.lastChild.classList, 'show') == false){
                  event.target.lastChild.classList.toggle('show')
             }
             
         }

         if(event.target.tagName == 'LI'){

            if(checkClass(event.target.lastChild.classList, 'active') == false){
                event.target.lastChild.classList.toggle('active')
             }

             if(checkClass(event.target.lastChild.children[1].classList, 'show') == false){
                 event.target.lastChild.children[1].classList.toggle('show')
             }           
         }
        }

        let hideLabel = (event)=>{
            if(event.target.tagName == 'LI'){

             event.target.lastChild.classList.remove('active')
             event.target.lastChild.children[1].classList.remove('show')
           
             }
        }
        
        return{
            showLabel, hideLabel
        }
    }
}
</script>
