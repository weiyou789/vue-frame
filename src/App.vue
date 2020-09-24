<template>
    <div id="app">
        <keep-alive :include="cachedInclude" :exclude="cachedExclude">
            <router-view/>
        </keep-alive>
    </div>
</template>
<script>
import {
    mapState as mapGlobalState,
} from "@/store/helper/global"
export default {
    mounted(){
        console.log(this.cachedInclude)
    },
    computed:{
        ...mapGlobalState(['cachedInclude','cachedExclude'])
    },
}
</script>

<style lang="scss">
#app {
    height: 100%;
}
</style>
