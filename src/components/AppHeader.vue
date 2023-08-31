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
                    <div class="col-6">
                        <img src="/logoinitials.png" style="width: 80px;" alt="">
                    </div>
                    <!-- Menu right -->
                    <div class="col-6">
                        <ul class="d-none d-sm-flex justify-content-end ls-none">
                            <li>Works</li>
                            <li>About</li>
                            <li class="email-color fw-bold">nicola.faedo@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

li {
    padding-right: 2rem;
    color: $grey;
}

.email-color {
    color: #ff8c42;
}
</style>