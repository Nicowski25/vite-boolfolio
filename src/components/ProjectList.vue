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
            max_text_lenght: 50,
        }
    },
    methods: {
        getProejcts(url) {
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
        },
        /*         getImageFromPath(path) {
                    return this.base_url + 'storage/' + path;
                } */
        trucateText(text) {
            if (text.length > this.max_text_lenght) {
                return text.slice(0, this.max_text_lenght) + '...';
            }
            return text
        },
    },
    mounted() {
        const url = this.base_url + this.projects_API
        this.getProejcts(url)
    }
}
</script>
<template>
    <section v-if="projects" class="w-100 p-3">
        <div class="container-fluid ">
            <div class="row g-2">
                <div class="col-6 my-2" v-for="project in projects">
                    <div class="h-100 card mx-2">

                        <!-- <img class="card-img-top"> -->
                        <div class="card-body p-2">
                            <div class="d-flex justify-content-between align-items-center">
                                <h3>{{ project.title }}</h3>
                                <p class="badge rounded-pill text-bg-primary m-0">{{ project.status }}</p>
                            </div>
                            <p> {{ trucateText(project.description) }} </p>
                            <p><strong>Expected weeks duration:</strong> {{ project.duration }}</p>
                            <p><strong>Start Date:</strong> {{ project.start_date }}</p>
                        </div>
                        <div class="card-footer">
                            <span class="mx-2 px-2 badge bg-dark">{{ project.id }}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;

section {
    background-color: $black-light;
}

.card {
    border: 1px solid $yellow;
    background-color: $greywhite;
    
    h3 {
        color: $yellow;
    }
}

</style>