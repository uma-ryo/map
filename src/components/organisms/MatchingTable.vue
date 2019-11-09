<template>
    <v-card class="matching-table">
        <v-card-title>
            対戦テーブル
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
            :items="nonDuplicatedCSInfo"
            :search="search"
            :footer-props="{
                itemsPerPageOptions: [10, -1],
                itemsPerPageText: '',
            }"
        ></v-data-table>
    </v-card>
</template>

<style scoped>
.matching-table {
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
                { text: '卓番号', value: 'table' },
                { text: '対戦者名', value: 'user1' },
                { text: '対戦者名', value: 'user2' },
            ],
        };
    },
    computed: {
        ...mapState([
            'csInfo',
        ]),
        nonDuplicatedCSInfo() {
            return this.csInfo.filter((item, index, array) => array.findIndex((innerItem) => item.table === innerItem.table) === index);
        },
    },
};
</script>
