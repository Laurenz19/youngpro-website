<template>
    <nav class="nav_left" v-if="showbars">
       <ul>
         <li v-for="page in data" :key="page" :name="page.label" @mouseover="showLabel" @mouseleave="hideLabel">
             <fa :icon="page.icon" :size="page.iconsize" />
             <span>{{page.label}}</span>    
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

        let showLabel= (event)=>{
         if(event.target.tagName == 'LI'){
             console.log(event.target.tagName)
             event.target.children[1].classList.toggle('show')
         }
           
        }

        let hideLabel = (event)=>{
             if(event.target.tagName == 'LI'){
             console.log(event.target.tagName)
             event.target.children[1].classList.remove('show')
         }
        }
        
        return{
            showLabel, hideLabel
        }
    }
}
</script>
