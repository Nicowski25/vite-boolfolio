<script>
import AppHeader from './components/AppHeader.vue';


export default {
    components: { AppHeader }
}

</script>

<template>
    <div>
        <router-view class="router"></router-view>
    </div>
</template>

<style lang="scss">
@use './assets/scss/partials/variables' as *;
@use './assets/scss/partials/commons' as *;

</style>
