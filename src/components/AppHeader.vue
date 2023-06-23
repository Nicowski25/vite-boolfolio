<script>
export default {
    name: 'AppHeader'
}
</script>


<template>
    <header class="shadow d-flex align-items-center z-i-1">
        <nav class="nav flex-column align-items-center w-100 h-100 justify-content-center">
            <div class="vertical-line"></div>
            <div class="flex-column justify-content-center align-items-center text-center">
                <router-link class="nav-link side-links" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
                <router-link class="nav-link" :to="{ 'name': 'projects' }">Projects</router-link>
                <router-link class="nav-link" :to="{ 'name': 'about' }">About</router-link>
                <router-link class="nav-link" :to="{ 'name': 'contacts' }">Contacts</router-link>
            </div>
            <div class="vertical-line"></div>
        </nav>
    </header>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

.vertical-line {
    height: 33%;
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