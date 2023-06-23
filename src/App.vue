<script>
import AppHeader from './components/AppHeader.vue';


export default {
    components: { AppHeader }
}

</script>

<template>

    <div class="d-flex w-100">

        <AppHeader class="d-none d-sm-block"></AppHeader>

        <router-view class="router"></router-view>

    </div>

</template>

<style lang="scss">
@use './assets/scss/partials/variables' as *;
@use './assets/scss/partials/commons' as *;

header {
    height: 100vh;
    background-color: $black-light;
    top: 0;
    left: 0;
    position: fixed;
    width: 10%;
}

.router {
    position: fixed;
    top: 0;
    left: 10%;
    width: 90%;
}

</style>
