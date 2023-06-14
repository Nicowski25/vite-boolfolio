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
    <section class="vue-home">
        <div class="container">
            <h1>Projects</h1>
            <div class="row">
            
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
