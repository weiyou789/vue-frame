<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
    import {
        mapMutations as mapGlobalMutations
    } from "@/store/helper/global"

    export default {
        name:'about',
        mounted(){
            this.setCachedInclude('home')
        },
        methods:{
            ...mapGlobalMutations(['setCachedInclude'])
        }
    }
</script>