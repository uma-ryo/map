<template>
    <v-app>
        <Header />
        <router-view />
    </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import {
    LOAD_COMPETITION_TABLE,
    LOAD_USERS,
} from './store/mutation_types';

import Header from './components/organisms/Header.vue';

export default {
    components: {
        Header,
    },
    created() {
        this.loadCompetitionTableAsync();
        this.loadUsersAsync();
    },
    computed: {
        ...mapState([
            'isCompetitionTableLoaded',
            'isUsersLoaded',
        ]),
    },
    methods: {
        ...mapActions({
            loadCompetitionTableAsync: LOAD_COMPETITION_TABLE,
            loadUsersAsync: LOAD_USERS,
        }),
    },
    watch: {
        $route() {
            if (!this.isCompetitionTableLoaded) {
                this.loadCompetitionTableAsync();
            }
            if (!this.isUsersLoaded) {
                this.loadUsersAsync();
            }
        },
    },
};
</script>