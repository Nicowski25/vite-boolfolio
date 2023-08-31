<script>
import AppHeader from '../components/AppHeader.vue';
import JumboHome from '../components/JumboHome.vue';
import ProjectList from '../components/ProjectList.vue';
import ProjectsView from './ProjectsView.vue';

export default {
    name: "HomeView2",
    components: {
    AppHeader,
    ProjectList,
    ProjectsView,
    JumboHome
}
}
</script>

<template>
    <AppHeader></AppHeader>

    <JumboHome></JumboHome>

    <ProjectList></ProjectList>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

</style>