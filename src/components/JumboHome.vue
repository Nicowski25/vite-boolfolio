<script>
export default {
    name: 'JumboHome',
}
</script>

<template>
    <!-- Name middle -->
    <section>
        <h1 class="text-center name-style grey-color pt-3">Hi, I'm <span class="main-color">Nicola</span>!</h1>
        <div class="d-flex flex-column align-items-start justify-content-center ps-4 vh-90">
            <h1 class="webdev">WEB</h1>
            <h1 class="fullstack">FULL-STACK</h1>
            <h1 class="webdev">DEVELOPER</h1>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

.name-style {
    font-size: 2rem;
    margin-bottom: -4rem;
}

.webdev {
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-size: 7rem;
    color: transparent;
    color: $medium-sea;
    z-index: 1;
    text-shadow:
        8px 0px 0px $background,
        /* Right shadow */
        -8px 0px 0px $background,
        /* Left shadow */
        0px 8px 0px $background,
        /* Bottom shadow */
        0px -8px 0px $background;
}

.fullstack {
    font-family: 'Montserrat', sans-serif;
    font-size: 11rem;
    margin-top: -5rem;
    margin-bottom: -5rem;
    color: #242424;
    text-shadow:
        1px 0px 0px $medium-sea,
        /* Right shadow */
        -1px 0px 0px $medium-sea,
        /* Left shadow */
        0px 1px 0px $medium-sea,
        /* Bottom shadow */
        0px -1px 0px $medium-sea;
}

.jumbo {
    margin-left: 3rem;
}

@media (max-width: 576px) {
    .jumbo {
        margin-left: 1rem;
    }
}
</style>