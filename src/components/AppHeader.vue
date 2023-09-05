<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <div class="d-flex justify-content-center">
        <div class="container-fluid px-4">
            <div class="row justify-content-between align-items-center">
                <!-- Logo left -->
                <div class="col-12 col-sm-6 text-center text-sm-start">
                    <img src="../assets/img/logoinitials.png" style="width: 80px;" alt="">
                </div>
                <!-- Menu right -->
                <div class="col-6">
                    <ul class="d-none grey-color d-sm-flex justify-content-end ls-none">
                        <a class="a-hover">Projects</a>
                        <a class="a-hover">About</a>
                        <a class="main-color fw-bold">nicola.faedo@gmail.com</a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

a {
    padding-right: 2rem;
    text-decoration: none;
    color: $grey1;
    .a-hover:hover {
        color: white;
    }
}


</style>