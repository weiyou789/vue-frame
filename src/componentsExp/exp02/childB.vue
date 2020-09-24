<template>
    <div>
        子组件组件2
    </div>
</template>

<script>
    export default {
        name: "childB",
        inject: ['parent'],//子组件接收
        created(){
            console.log(this.parent)
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>