<template>
    <v-app>
        <div>
            <router-link to="/">Top</router-link>
            <router-link to="/users">Users</router-link>
        </div>
        <router-view />
    </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import {
    LOAD_COMPETITION_TABLE,
    LOAD_USERS,
    UPDATE_COMPETITION_TABLE_LOADED_FLAG,
    UPDATE_USERS_LOADED_FLAG,
} from './store/mutation_types';

export default {
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
            updateCompetitionTableLoadedFlag: UPDATE_COMPETITION_TABLE_LOADED_FLAG,
            updateUsersLoadedFlag: UPDATE_USERS_LOADED_FLAG,
        }),
    },
    watch: {
        $route() {
            if (!this.isCompetitionTableLoaded) {
                this.updateCompetitionTableLoadedFlag();
            }
            if (!this.isUsersLoaded) {
                this.updateUsersLoadedFlag();
            }
        },
    },
};
</script>
