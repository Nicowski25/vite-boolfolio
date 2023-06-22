<script>
import ProjectList from '../components/ProjectList.vue';
import JumboHome from '../components/JumboHome.vue';

export default {
    name: "HomeView",
    components: { 
        ProjectList,
        JumboHome, 
    }
}
</script>

<template>
    <h1 class="text-center my-3">My Projects</h1>
    <ProjectList></ProjectList>
    <JumboHome></JumboHome>
</template>


<style lang="scss">
@use '../assets/scss/style.scss';

h1 {
    color: $primary-dark;
}

</style>