<template>
    <div class="content-wapper">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    export default Vue.extend({
        name: "PageContent",
    });
</script>
<style scoped>
    .content-wapper {
        margin-left: 230px;
        box-sizing: border-box;
        width: calc(100% - 230px);
        height: 100%;
    }
</style>


