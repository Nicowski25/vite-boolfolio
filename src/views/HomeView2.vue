<script>
import AppHeader from '../components/AppHeader.vue';
import JumboHome from '../components/JumboHome.vue';
import ProjectList from '../components/ProjectList.vue';
import LogoSlider from '../components/LogoSlider.vue';

export default {
    name: "HomeView2",
    components: {
        AppHeader,
        ProjectList,
        JumboHome,
        LogoSlider
    }
}
</script>

<template>
    <AppHeader></AppHeader>

    <JumboHome></JumboHome>

    <ProjectList></ProjectList>

    <LogoSlider></LogoSlider>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;
</style>