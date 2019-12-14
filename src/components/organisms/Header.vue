<template>
    <div>
    <v-toolbar>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>  
        <v-toolbar-items>
            <v-btn text><router-link class="route-link-text" to="/">Tables</router-link></v-btn>
            <v-btn text><router-link class="route-link-text" to="/users">Users</router-link></v-btn>
            <v-btn v-if="!isLogin" text @click="showLoginModal()">Login</v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <LoginModal ref="modal" />
    </div>
</template>

<script>
import { mapState } from 'vuex';

import LoginModal from '../organisms/LoginModal.vue';

export default {
    components: {
        LoginModal,
    },
    computed: {
        ...mapState([
            'isLogin',
        ]),
    },
    methods: {
        showLoginModal() {
            this.$refs.modal.show();
        },
    },
}
</script>

<style scoped>
.route-link-text {
    color: black;
    text-decoration: none;
}
</style>