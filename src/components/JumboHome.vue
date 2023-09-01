<script>
export default {
    name: 'JumboHome',
}
</script>

<template>
    <div class="d-flex flex-column vh-90 position-relative">
        <!-- Name middle -->
        <div class="d-flex justify-content-center align-items-center py-4">
            <h4 class="grey-color">Hi, I'm <span class="fw-bold orange-color">Nicola!</span></h4>
        </div>
        <!-- main writings -->
        <div class="text-light">
            <div class="position-absolute top-50 start-0 translate-middle-y jumbo">
                <h2 class=""><span class="grey-color">I'm a </span>Full-Stack</h2>
                <h1 class="text-light text-decoration-none"><span class="orange-color border-bottom">Web Dev</span>eloper</h1>  
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

h1 {
    /*     font-family: 'Play', sans-serif; */
    font-size: 7rem;
    font-family: 'Bricolage Grotesque', sans-serif;
}

h2 {
    /* font-family: 'Play', sans-serif; */
    font-family: 'Bricolage Grotesque', sans-serif;
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