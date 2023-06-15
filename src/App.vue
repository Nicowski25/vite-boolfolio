<script>

export default {

}

</script>

<template>

    <header>
        <nav class="nav justify-content-center  ">
          <router-link class="nav-link" :to="{'name' : 'home'}" aria-current="page">Home</router-link>
          <router-link class="nav-link" :to="{'name' : 'about'}">About</router-link>
          <router-link class="nav-link" :to="{'name' : 'contacts'}">Contacts</router-link>
        </nav>
    </header>
    <router-view></router-view>

</template>

<style lang="scss">
@use './styles/general.scss';
</style>
