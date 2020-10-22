<template>
    <div class="matching-table">
        <v-tabs
            v-if="roundNumber.length > 0"
            grow
        >
            <v-tab
                class="round-tab"
                v-for="round in roundNumber"
                :key="round"
                @click="changeRound(round)"
            >
                {{round}}回戦
            </v-tab>
        </v-tabs>
        <v-card>
            <v-card-title>
                対戦テーブル
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    :append-icon="searchIcon"
                    label="Search"
                    single-line
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="filteredCSInfo"
                :search="search"
                :footer-props="{
                    itemsPerPageOptions: [10, -1],
                    itemsPerPageText: '',
                }"
            ></v-data-table>
        </v-card>
    </div>
</template>

<style scoped>
.round-tab {
    padding: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
}

.matching-table {
    padding: 0 2%;
    margin: 0 2%;
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
            round: 1,
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
        filteredCSInfo() {
            if (!this.csInfo) {
                return [];
            }
            return this.csInfo.filter(matching => matching.round === this.round);
        },
        roundNumber() {
            if (!this.csInfo) {
                return [];
            }
            return this.csInfo
                .map(matching => matching.round)
                .filter((round, index, array) => array.indexOf(round) === index)
                .sort();
        }
    },
    methods: {
        changeRound(round) {
            if (this.round !== round) {
                this.round = round;
            }
        },
    },
};
</script>
