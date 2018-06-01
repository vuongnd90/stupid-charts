<template>
    <div class="main-header header">
        <a href="/" class="logo">
            <span>VA</span>
        </a>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    export default Vue.extend({
        name: "Header",
    });
</script>
<style scoped>
    .header {
        background-color: burlywood;
    }

    .logo {
        width: 230px;
        display: block;
        height: 100%;
        text-align: center;
        line-height: 50px;
        text-decoration: none;
        font-size: 25px;
        font-weight: bold;
    }
</style>


