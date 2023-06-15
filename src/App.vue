<script>
import axios from 'axios'

export default {
    components: {

    },
    data() {
        return {
            base_API: 'http://127.0.0.1:8000/',
            projects_path: 'api/projects',
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
        }
    },
    mounted() {
        const url = this.base_API + this.projects_path
        this.getProejcts(url)
    }
}

</script>

<template>
    <section class="projects">
        <div class="container">
            <h1>Projects</h1>
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

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
