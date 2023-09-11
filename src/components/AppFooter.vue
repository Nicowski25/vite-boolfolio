<script>
export default {
    name: 'AppFooter'
}
</script>
<template>
    <section>
        <div class="d-flex justify-content-center align-items-center">
            <p class="grey-color me-2">Copyright © Nicola Faedo</p>
            <p class="grey-color">|</p>
            <p>
                <router-link :to="{ name: 'privacy' }" class="grey-color ms-2">Informativa sulla Privacy - Note Legali</router-link>

            </p>
        </div>
    </section>
</template>


<style lang="scss" scoped>
/* MOBILE DEVICE MEDIAQUERY */
@media screen and (max-width: 576px) {
    p {
        font-size: 0.7rem;
    }
}
</style>