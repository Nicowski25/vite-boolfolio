<script>
import AppHeader from './components/AppHeader.vue';


export default {
    components: { AppHeader }
}

</script>

<template>
    <AppHeader class="w-100"></AppHeader>
    <router-view class="router"></router-view>
</template>

<style lang="scss">
@use './assets/scss/partials/variables' as *;
@use './assets/scss/partials/commons' as *;

header {
    background-color: $black-light;
    top: 0;
    left: 0;
    position: fixed;
}
</style>
