<script>
import ProjectList from '../components/ProjectList.vue';
import JumboHome from '../components/JumboHome.vue';
import ProjectsView from './ProjectsView.vue';

export default {
    name: "HomeView",
    components: {
        ProjectList,
        JumboHome,
        ProjectsView
    }
}
</script>

<template>
    <div class="d-flex flex-column">
        <JumboHome></JumboHome>
        <h1 class="text-center py-2">My Projects</h1>
        <ProjectList></ProjectList>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

h1 {
    color: $yellow;
    background-color: $black-light;
}

.bg-white {
    background-color: $greywhite;
}

</style>