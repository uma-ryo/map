<template>
    <v-card class="users-table">
        <v-card-title>
            Users
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :mobile-breakpoint="0"
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
    padding: 0 5%;
    margin: 0 5%;
}
</style>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            search: '',
            headers: [
                { text: 'No', value: 'id' },
                { text: 'あなたのお名前', value: 'name' },
                { text: '得点', value: 'mp' },
                { text: '備考', value: 'note' },
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
