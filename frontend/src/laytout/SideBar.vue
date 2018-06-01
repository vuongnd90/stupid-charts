<template>
    <div class="side-bar">
        <ul>
            <li><router-link to="/graph">Graph</router-link></li>
        </ul>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    export default Vue.extend({
        name: "SideBar",
    });
</script>
<style scoped>
    .side-bar {
        width: 230px;
        position: absolute;
        min-height: 100%;
        background-color: #222d32;
    }
</style>


