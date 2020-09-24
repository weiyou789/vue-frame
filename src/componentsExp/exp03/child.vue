<template>
    <div @click="setCount">{{ count }}</div>
</template>

<script>
    import { state,mutations } from './store.js'
    export default {
        name: "child",
        computed: {
            count() {
                return state.count
            }
        },
        methods: {
            setCount() {
                mutations.SET_COUNT(100)
            }
        }
    }
</script>

<style scoped>

</style>