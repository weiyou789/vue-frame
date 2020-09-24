<template>
    <div class="parent">
        <input type="button"
               value="我是父组件中的按钮"
               @click="show">
        <child :isShow.sync="isShow" v-show="isShow"></child>
    </div>
</template>

<script>
    import child from '@/componentsExp/exp01/child'
    export default {
        name: "parent",
        data(){
            return {
                isShow:true
            }
        },
        mounted(){
            console.log(this.title)
        },
        components:{
            child
        },
        methods:{
            show(){
                this.isShow=true;
            },
            changeIsShow(bol){
                this.isShow=bol;
            }
        }
    }
</script>

<style scoped>

</style>