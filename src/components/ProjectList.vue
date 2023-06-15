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
    },
    mounted() {
        const url = this.base_url + this.projects_API
        this.getProejcts(url)
    }
}
</script>
<template>
        <section class="projects" v-if="projects">
        <div class="container">
            <h1 class="my-3">Projects</h1>
            <div class="row row-cols-2 row-cols-md-3">
                <div class="col g-3" v-for="project in projects">
                    <div class="card">

                        <img class="card-img-top">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <h3>{{ project.title }}</h3>
                                <p class="badge rounded-pill text-bg-primary m-0">{{project.status}}</p>
                            </div>
                            <p> {{ project.description }} </p>
                            <p><strong>Expected weeks duration:</strong> {{ project.duration }}</p>
                            <p><strong>Start Date:</strong> {{ project.start_date }}</p>
                        </div>
                        <div class="card-footer">
                            <span class="badge bg-dark">{{project.id}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped></style>