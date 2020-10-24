<template>
    <div>
    <v-toolbar>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn text><router-link class="route-link-text" :to="{ path: '/', query }">対戦表</router-link></v-btn>
            <v-btn text><router-link class="route-link-text" :to="{ path: '/users', query }">参加者</router-link></v-btn>
            <template v-if="isLogin">
                <v-btn text><router-link class="route-link-text" :to="{ path: '/tools', query }">ツール</router-link></v-btn>
                <v-btn text @click="logout">ログアウト</v-btn>
            </template>
            <template v-else>
                <v-btn text @click="showLoginModal()">ログイン</v-btn>
            </template>
        </v-toolbar-items>
    </v-toolbar>

    <LoginModal ref="modal" />
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { LOGOUT } from '../../store/mutation_types';

import LoginModal from '../organisms/LoginModal.vue';

export default {
    components: {
        LoginModal,
    },
    computed: {
        ...mapState([
            'isLogin',
        ]),
        query() {
            return this.$route.query;
        },
    },
    methods: {
        showLoginModal() {
            this.$refs.modal.show();
        },
        ...mapMutations({
            logout: LOGOUT,
        }),
    },
}
</script>

<style scoped>
.route-link-text {
    color: black;
    text-decoration: none;
}
</style>