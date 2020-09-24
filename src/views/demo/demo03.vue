<template>
    <div class="parent">
        <child></child>
        {{count}}
    </div>
</template>

<script>
    import child from '@/componentsExp/exp03/child'
    import { state } from '@/componentsExp/exp03/store'
    export default {
        name: "parent",
        data(){
            return {
                title:'测试'
            }
        },
        computed: {
            count() {
                return state.count
            }
        },
        components:{
            child
        },
        mounted(){
            // console.log(this.title)
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>