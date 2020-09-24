<template>
    <div>
        子组件组件
        <input type="button" value="点我隐身" @click="changeShow">
    </div>
</template>

<script>
    export default {
        name: "child",
        methods: {
            changeShow(){
                this.$emit('update:isShow', false)
            }
        }
    }
</script>

<style scoped>

</style>