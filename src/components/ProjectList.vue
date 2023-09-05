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
    <section v-if="projects" class="w-100 bg-projects">
        <!-- introduction title -->
        <div class="d-flex flex-column align-items-center my-5">
            <h1 class="project-title mb-1 py-3">PROJECTS</h1>
            <p class="text-center grey-color fs-4">This is my web project gallery, here you'll find my most
                recent and creative works.</p>
        </div>
        <!-- projects container -->
        <div class="container m-auto">
            <div class="my-2 d-flex align-items-center card-height">

                <!-- card of the slider -->
                <div class="h-100 w-100 card" v-show="projects.length > 0" @mouseenter="stopAutoChangeSlide"
                    @mouseleave="startAutoChangeSlide">
                    <div class="row h-100 d-flex align-items-center">
                        <!-- card image -->
                        <div class="col-12 col-sm-8 ">
                            <img :src="getImageFromPath(projects[currentProjectIndex].image)">
                        </div>
                        <!-- card text -->
                        <div class="col-12 col-sm-4 ps-2 mb-3">
                            <div class="card-body p-2">
                                <h2 class="fw-bold main-color">{{ projects[currentProjectIndex].title }}</h2>
                                <!-- badges project-type -->
                                <p class="badge rounded-pill p-1 text-bg-success m-0">
                                    <div v-if="projects[currentProjectIndex].type_id == '1'">
                                        Front-end
                                    </div>
                                    <div v-else-if="projects[currentProjectIndex].type_id == '2'">
                                        Back-end
                                    </div>
                                    <div v-else="projects[currentProjectIndex].type_id == '3'">
                                        Full-Stack
                                    </div>
                                </p>
                                <!-- !badges project-type -->
                                <p> {{ trucateText(projects[currentProjectIndex].description) }} </p>
                                <p><strong>Weeks duration:</strong> {{ projects[currentProjectIndex].duration }}
                                </p>
                                <a :href="projects[currentProjectIndex].repositoryUrl" target="_blank"><strong>Github Repository</strong> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /card of slider -->
            </div>
            <!-- slider nav -->
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

.bg-projects {
    background-color: rgba(26, 25, 25, 0.75);
    box-shadow: rgba(43, 42, 42, 0.521) 0px -50px 36px -28px inset;
}

.card-height {
    height: 500px;
}

@media screen and (min-width: 576px) {
    .card-height {
        height: 400px;
    }

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
        color: $main;
    }
}

.card-body {
    p, a {
        padding-top: 1rem;
    }
}
.project-title {
    color: white;
    font-size: 3rem;
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    width: 70%;
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid $main;
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
        background-color: $main;
    }
}
</style>