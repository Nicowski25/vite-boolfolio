<script>
import ProjectList from '../components/ProjectList.vue';
export default {
    name: 'ProjectsView',
    components: { ProjectList, ProjectList }
}
</script>

<template>
    <div class="bg p-3 h-100">
        <h1 class="pt-5">Project Page</h1>
        <ProjectList></ProjectList>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

</style>
