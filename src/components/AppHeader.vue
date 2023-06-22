<script>
export default {
    name: 'AppHeader'
}
</script>


<template>

    <header class="shadow bg-dark">
        <nav class="nav flex-column align-items-center h-100 justify-content-center">
          <router-link class="nav-link side-links" :to="{'name' : 'home'}" aria-current="page">Home</router-link>
          <router-link class="nav-link" :to="{'name' : 'projects'}">Projects</router-link>
          <router-link class="nav-link" :to="{'name' : 'about'}">About</router-link>
          <router-link class="nav-link" :to="{'name' : 'contacts'}">Contacts</router-link>
        </nav>
    </header>

</template>


<style lang="scss" scoped>

header {
    height: 100vh;
}

.nav-link {
    padding: 0.5rem;
}

</style>