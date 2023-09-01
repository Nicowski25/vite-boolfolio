<script>
import axios from 'axios';
export default {
    name: 'ProjectList',
    data() {
        return {
            base_url: 'http://127.0.0.1:8000/',
            projects_API: 'api/projects',
            loading: true,
            projects: null,
            error: null,
            max_text_lenght: 350,
            currentProjectIndex: 0,
        }
    },
    methods: {
        trucateText(text) {
            if (text.length > this.max_text_lenght) {
                return text.slice(0, this.max_text_lenght) + '...';
            }
            return text
        },
        getImageFromPath(path) {
            //console.log(this.base_url + 'storage/' + path);
            return this.base_url + 'storage/' + path;
        },
        autoChangeSlide() {
            if (this.currentProjectIndex < this.projects.length - 1) {
                this.currentProjectIndex++;
            } else {
                this.currentProjectIndex = 0; // Torna al primo elemento se si è all'ultimo
            }
        },
        //fat ricominciare il timer
        startAutoChangeSlide() {
            this.timer = setInterval(this.autoChangeSlide, 5000);
        },
        // Metodo per fermare il timer
        stopAutoChangeSlide() {
            clearInterval(this.timer);
        },
    },
    mounted() {
        this.timer = setInterval(this.autoChangeSlide, 5000);
        const url = this.base_url + this.projects_API
        axios
            .get(url)
            .then(response => {
                console.log(response);
                this.projects = response.data.projects
                this.loading = false
            })
            .catch(error => {
                console.log(error);
                this.error = error.message
            })

    }
}
</script>
<template>
    <section v-if="projects" class="w-100 p-3">
        <div class="d-flex flex-column align-items-center my-5">
            <!-- introduction title -->
            <h1 class="border-bot mb-1">PROJECTS</h1>
            <p class="text-center grey-color fs-4">This is my web project gallery, where you'll find a collection of my most
                recent and creative works.</p>
        </div>
        <div class="container m-auto">
            <div class="my-2 d-flex align-items-center card-height">

                <div class="h-100 w-100 card" v-show="projects.length > 0" @mouseenter="stopAutoChangeSlide"
                    @mouseleave="startAutoChangeSlide">
                    <div class="row h-100 d-flex align-items-center">
                        <!-- card image -->
                        <div class="col-12 col-sm-8 ">
                            <img :src="getImageFromPath(projects[currentProjectIndex].image)">
                        </div>
                        <!-- card text -->
                        <div class="col-4">
                            <div class="card-body p-2">
                                <h2 class="fw-bold orange-color">{{ projects[currentProjectIndex].title }}</h2>
                                <p class="badge rounded-pill text-bg-primary m-0">{{ projects[currentProjectIndex].status }}
                                </p>
                                <p> {{ trucateText(projects[currentProjectIndex].description) }} </p>
                                <p><strong>Expected weeks duration:</strong> {{ projects[currentProjectIndex].duration }}
                                </p>
                                <p><strong>Start Date:</strong> {{ projects[currentProjectIndex].start_date }}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- slider -->
            <div class="slider_navi px-2 col-sm-12 d-flex justify-content-center">
                <div v-for="(project, index) in projects" :key="index">
                    <a @click.prevent="currentProjectIndex = index" class="slider-item"
                        :class="{ 'active-slide': currentProjectIndex === index }" href="#"></a>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

.card-height {
    height: 400px;
}

.card {
    color: rgb(221, 198, 198);
    //border: 1px solid #313131e1;
    //background-color: #1a191996;
    //border-radius: 10px;
    border: 0px;
    background-color: transparent;
    padding: 15px;

    h3 {
        color: $orange;
    }
}

h1 {
    /* font-family: 'Play', sans-serif;  */
    font-size: 3rem;
    font-family: 'Bricolage Grotesque', sans-serif;
    text-align: center;
    margin-bottom: 3rem;
    color: white;
}

.border-bot {
    width: 70%;
    border-bottom: 1px solid $orange;
}

img {
    max-width: 100%;
}

.slider-item {
    display: inline-block;
    height: 8px;
    width: 35px;
    margin: 20px 20px;
    border-radius: 5px;
    box-shadow: none;
    border: none;
    background-color: rgba(255, 255, 255, 0.507);

    &.active-slide {
        background-color: $orange;
    }
}

.slide-transition-enter-active,
.slide-transition-leave-active {
    transition: opacity 0.5s;
}

.slide-transition-enter,
.slide-transition-leave-to {
    opacity: 0.5;
}
</style>