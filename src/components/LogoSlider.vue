<script>
export default {
    name: 'LogoSlider',
    data() {
        return {
            images: [
                'nodejs.svg',
                'mysql.svg',
                'css.svg',
                'Git.png',
                'HTML5.png',
                'javascript.png',
                'vuejs.png',
                'laravel.svg.png',
                'php.png',
                'bootstrap.svg',
                'phpmyadmin.ico',
                'npm.svg'
            ],
        };
    },
};

</script>

<template>
    <section id="toolset">
        <!-- TITLE -->
        <div class="d-flex flex-column align-items-center my-5">
            <h1 class="section-title mb-1 py-3">TOOLSET</h1>
            <p class="text-center grey-color fs-4">These are the tools and technologies I utilize in my works.</p>
        </div>
        <!-- SLIDER -->
        <div class="slider-container">
            <div class="slider">
                <div class="slide" v-for="(image, index) in images" :key="index">
                    <img :src="(`../assets/img/${image}`)" alt="Slide" class="slide-img" />
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

.slider-container {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.slider {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 100%;   
}

.slide {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    width: 8%;
    margin: auto;
}

img {
    max-width: 90px;
    height: auto;
}

@media (max-width: 1195px) {
    .slider {
        column-count: 2;
        display: inline-block;
        gap: 3rem; 
    }
    .slide {
        margin-top: 1.5rem;
    }
}
</style>