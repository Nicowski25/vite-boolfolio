<script>
import AppHeader from './components/AppHeader.vue';


export default {
    components: { AppHeader }
}

</script>

<template>

    <div class="d-flex">

        <AppHeader></AppHeader>
        
        <router-view></router-view>

    </div>

</template>

<style lang="scss">
</style>
