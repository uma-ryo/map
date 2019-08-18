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
            :items="csInfo"
            :search="search"
            :footer-props="{
                itemsPerPageOptions: [10, -1],
                itemsPerPageText: '',
            }"
        ></v-data-table>
        <v-btn
            @click="log"
        >
        </v-btn>
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
                { text: 'No', value: 'user1Id' },
                { text: 'あなたのお名前', value: 'user1' },
                { text: '得点', value: 'user1Mp' },
                { text: '備考', value: 'user1Note' },
            ],
        };
    },
    computed: {
        ...mapState([
            'csInfo',
        ]),
    },
    methods: {
        log() {
            console.log(this.csInfo);
        },
    },
};
</script>
