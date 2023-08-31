<script>
import ProjectList from '../components/ProjectList.vue';

export default {
    name: 'ProjectsView',
    components: { ProjectList }
}
</script>

<template>
    <div class="bg p-3 h-100">
        <h1 class="pt-5">Project Page</h1>
        <ProjectList class="py-3"></ProjectList>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

.bg {
    background-color: $greywhite;
}

</style>
