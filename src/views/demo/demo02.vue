<template>
    <div class="parent">
        <childA></childA>
        <childB></childB>
    </div>
</template>

<script>
    import childA from '@/componentsExp/exp02/childA'
    import childB from '@/componentsExp/exp02/childB'
    export default {
        name: "parent",
        data(){
            return {
                title:'测试'
            }
        },
        provide() {//注入父组件自身
            return {
                parent: this
            }
        },
        mounted(){
            console.log(this.title)
        },
        components:{
            childA,
            childB
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>