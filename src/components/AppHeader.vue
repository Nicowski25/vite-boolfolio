<script>
export default {
    name: 'AppHeader'
}
</script>


<template>
    <header class="shadow align-items-center z-i-1">
        <div class="navbar align-items-center justify-content-center">
            <div class="vertical-line flex-grow-1"></div>
            <div class="d-flex justify-content-center align-items-center text-center mx-2">
                <router-link class="nav-link side-links" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
                <div class="vertical-line px-1"></div>
                <router-link class="nav-link" :to="{ 'name': 'projects' }">Projects</router-link>
                <div class="vertical-line px-1"></div>
                <router-link class="nav-link" :to="{ 'name': 'about' }">About</router-link>
                <div class="vertical-line px-1"></div>
                <router-link class="nav-link" :to="{ 'name': 'contacts' }">Contacts</router-link>
            </div>
            <div class="vertical-line flex-grow-1"></div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

.vertical-line {
    border: 1px solid $yellow;
}

.nav-link {
    padding: 0.5rem;
    color: $yellow;
}

.z-i-1 {
    z-index: 1;
}
</style>