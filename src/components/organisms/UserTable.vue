<template>
    <v-card class="users-table">
        <v-card-title>
            参加者
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                :append-icon="searchIcon"
                label="検索"
                single-line
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="users"
            :search="search"
            :footer-props="{
                itemsPerPageOptions: [10, -1],
                itemsPerPageText: '',
            }"
        ></v-data-table>
    </v-card>
</template>

<style scoped>
.users-table {
    margin: 0 4% 30px;
}
</style>

<script>
import { mapState } from 'vuex';
import { mdiMagnify } from '@mdi/js';

export default {
    data() {
        return {
            searchIcon: mdiMagnify,
            search: '',
            headers: [
                { text: 'No', value: 'no' },
                { text: 'あなたのお名前', value: 'name' },
                { text: '得点', value: 'mp' },
            ],
        };
    },
    computed: {
        ...mapState([
            'users',
        ]),
    },
};
</script>
