<script>
export default {
    name: 'NotFound',
}
</script>
<template>
    <div class="vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1 class="section-title mb-1 py-3">404 | Page Not Found</h1>
        <router-link :to="{ name: 'home' }" class="btn btn-success mt-3">Back to Homepage</router-link>
    </div>
</template>


<style lang="scss" scoped></style>