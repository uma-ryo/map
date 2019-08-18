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
import { LOAD } from './store/mutation_types';

export default {
    created() {
        this.loadUserDataAsync();
    },
    computed: {
        ...mapState([
            'isLoaded',
        ]),
    },
    methods: {
        ...mapActions({
            loadUserDataAsync: LOAD,
        }),
    },
    watch: {
        $route() {
            if (!this.isLoaded) {
                this.loadUserDataAsync();
            }
        },
    },
};
</script>
