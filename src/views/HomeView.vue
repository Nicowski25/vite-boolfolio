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
        <h1 class="text-center my-3 bg-white">My Projects</h1>
        <ProjectList></ProjectList>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

h1 {
    color: $yellow;
}

.bg-white {
    background-color: $greywhite;
}
</style>