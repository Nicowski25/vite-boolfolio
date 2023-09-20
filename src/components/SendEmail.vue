<script>
import axios from 'axios';
export default {
    name: "SendEmail",
    components: {},
    data() {
        return {
            base_url: 'https://admin.nicolafaedo.it/',
            mail_API: 'api/contacts',
            name: '',
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            this.errors = {}; // pulisco l'array con i messaggi d'errore
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            };

            axios
                .post(this.base_url + this.mail_API, data)
                .then((response) => {
                    if (!response.data.success) {
                        this.errors = response.data.errors;
                    } else {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                        this.success = true;
                    }
                    this.loading = false;
                })
                .catch(err => {
                    console.log(err);
                });
        },
    }
};
</script>
<template>
    <section id="send-message">
        <!-- TITLE -->
        <div class="d-flex flex-column align-items-center my-5">
            <h1 class="section-title mb-1 py-3">CONTACTS</h1>
            <p class="text-center grey-color fs-4">Feel free to reach out using the form below, and I'll respond as soon as
                possible.</p>
        </div>
        <!-- alert success -->
        <div v-if="success" class="alert alert-success text-start px-5 mx-5" role="alert">
            <strong>Message sent successfully!</strong>
        </div>
        
        <!-- form -->
        <form @submit.prevent="sendForm()" class="w-75 m-auto mb-5">

            <!-- name -->
            <div class="mb-3">
                <small class="form-text text-light">Insert here your name.</small>
                <input required type="text" name="name" id="name" v-model="name" class="form-control"
                    :class="{ 'is-invalid': errors.name }" placeholder="Mario Rossi" />
                <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="invalid-feedback"> {{ error
                }} </p>
            </div>

            <!-- email -->
            <div class="mb-3">
                <small class="form-text text-light">Insert here your email.</small>
                <input required type="email" name="email" id="email" v-model="email" class="form-control"
                    :class="{ 'is-invalid': errors.email }" placeholder="mario@rossi.com" />
                <p v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="invalid-feedback"> {{ error
                }} </p>
            </div>

            <!-- message -->
            <div class="mb-3">
                <small class="form-text text-light">Insert here the message.</small>
                <textarea required rows="5" name="message" id="message" v-model="message" class="form-control"
                    :class="{ 'is-invalid': errors.message }" placeholder="Message"></textarea>
                <p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="invalid-feedback"> {{
                    error }} </p>
            </div>

            <!-- buttons -->
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary py-2 px-3" type="submit" :disabled="loading">{{ loading ? 'Sending...' :
                    'Send' }} </button>
            </div>

        </form>
    </section>
    <!-- /#send_message -->
</template>

<style lang="scss" scoped></style>