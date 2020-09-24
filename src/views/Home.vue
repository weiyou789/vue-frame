<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div class="wyz">123435</div>
        <van-button type="primary">主要按钮</van-button>
    </div>
</template>

<script>
import {
    mapActions as mapTestActions,
    mapState as mapTestState,
    // mapGetters as mapTestGetters
} from "@/store/helper/test"

export default {
    name: 'home',
    data(){
        return {

        }
    },
    async mounted(){
        await this.getTestDataAct()
        console.log(111,this.testData)
    },
    computed:{
        ...mapTestState(['testData'])
    },
    methods:{
        ...mapTestActions(['getTestDataAct']),
        // ...mapTestGetters(["testData"])
    }
}
</script>
<style lang="scss" scoped>
    .wyz{
        width: 100px;
        height: 100px;
        background: #fff;
        color: #333;
    }
</style>
