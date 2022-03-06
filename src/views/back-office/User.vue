<template>
    <div>
        <app-template :menu="menu">
            <template v-slot:content>
                <h1>User</h1>
            </template>
        </app-template>
    </div>
</template>

<script>
import Back_template from '../../components/Back_template.vue'
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
    name:"User",
    components:{
        "app-template":Back_template
    },
    setup(){
        const store = useStore()
        const menu = computed(()=>store.getters.MENU)
        
        return{
            menu
        }

    }
}
</script>