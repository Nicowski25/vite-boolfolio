<script>
import ProjectList from '../components/ProjectList.vue';
import ProjectsView from './ProjectsView.vue';

export default {
    name: "HomeView2",
    components: {
        ProjectList,
        ProjectsView
    }
}
</script>

<template>
    <div class="d-flex flex-column vh-100 position-relative">
        <!-- STARTING JUMBO -->
        <div class="vh-100">
            <!-- Name middle -->
            <div class="d-flex justify-content-center align-items-center py-4">
                <h4 class="color-grey">Hi, I'm <span class="fw-bold email-color">Nicola F.</span></h4>
            </div>
            <!-- main writings -->
            <div class="text-light">
                <div class="position-absolute top-50 start-0 translate-middle-y jumbo">
                    <h2 class="pt-4"><span class="color-grey">I'm a </span>Full-Stack</h2>
                    <h1>Web <span>Developer</span></h1>
                </div>
            </div>
        </div>
    </div>
    <ProjectList></ProjectList>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

h1 {
    font-family: 'Play', sans-serif;
    font-size: 7rem;
}

h2 {
    font-family: 'Play', sans-serif;
}

.jumbo {
    margin-left: 3rem;
}

@media (max-width: 576px) {
    .jumbo {
        margin-left: 1rem;

        h1 {
            font-size: 4.5rem;
        }
    }
}
</style>