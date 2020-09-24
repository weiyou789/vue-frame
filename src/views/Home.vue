<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div @click="$router.push('/about')" class="wyz">123435</div>
        <van-button type="primary">主要按钮</van-button>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
    </div>
</template>

<script>
import {
    mapActions as mapTestActions,
    mapState as mapTestState,
    // mapGetters as mapTestGetters
} from "@/store/helper/test"
/*import {
    mapMutations as mapGlobalMutations
} from "@/store/helper/global"*/

export default {
    name: 'home',
    data(){
        return {
            value1: 0,
            value2: 'a',
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
        }
    },
    mounted(){
        this.act1()
        this.act2()
    },
    computed:{
        ...mapTestState(['testData'])
    },
    methods:{
        ...mapTestActions(['getTestDataAct']),
        // ...mapGlobalMutations(['setCachedInclude'])
        // ...mapTestGetters(["testData"])
        async act1(){
            await this.getTestDataAct()
        },
        async act2(){
            await this.getTestDataAct()
        }
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
