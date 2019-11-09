<template>
    <div class="file-upload-bar">
        <v-file-input
            class="file-input"
            :accept="acceptMime"
            @change="fileUpdate"
        ></v-file-input>
        <v-spacer></v-spacer>
        <v-btn
            class="accept-btn"
            :color="'primary'"
            @click="uploadFile"
        >
            UPLOAD
        </v-btn>
    </div>
</template>

<style scoped>
.file-upload-bar {
    display: flex;
}
.file-input {
    width: 55%;
}
.accept-btn {
    position: relative;
    top: 12px;
    width: 20%;
    font-size: 1.5vw;
    font-weight: bold;
}
</style>

<script>
import axios from 'axios';
import csvParse from 'csv-parse/lib/sync';
import { mapState } from 'vuex';

export default {
    props: {
        acceptMime: {
            type: String,
            default: 'text/csv',
        },
    },
    data() {
        return {
            file: '',
            csvColumns: [
                'round',
                'table',
                'user1No',
                'user1Name',
                'user1Kana',
                'user1Id',
                'user1Note',
                'user2No',
                'user2Name',
                'user2Kana',
                'user2Id',
                'user2Note',
                'user1Mp',
                'user2Mp',
            ],
        };
    },
    computed: {
        ...mapState([
            'apiDomain',
            'apiVersion',
        ]),
    },
    methods: {
        fileUpdate(file) {
            if (file) {
                this.file = file;
            }
        },
        async uploadFile() {
            const csv = await this.readFile(this.file);

            const data = await Promise.all([
                axios.post(`https://${this.apiDomain}/${this.apiVersion}/set-cs-info`, JSON.stringify({
                    matches: this.parseToCompetitionTable(csv),
                })),
                axios.post(`https://${this.apiDomain}/${this.apiVersion}/set-users`, JSON.stringify({
                    users: this.parseToUsers(csv),
                })),
            ]);

            console.log(data);
        },
        parseToCompetitionTable(csv) {
            return csv.map((line) => ({
                round: line.round,
                table: line.table,
                user1: line.user1Name,
                user2: line.user2Name,
                noteFlag: !!line.user1Note && !!line.user2Note,
            }));
        },
        parseToUsers(csv) {
            return csv.flatMap((line) => [
                {
                    id: line.user1Id,
                    name: line.user1Name,
                    kana: line.user1Kana,
                    mp: line.user1Mp,
                    note: line.user1Note,
                },
                {
                    id: line.user2Id,
                    name: line.user2Name,
                    kana: line.user2Kana,
                    mp: line.user2Mp,
                    note: line.user2Note,
                },
            ]);
        },
        readFile(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.readAsText(file, 'shift_jis');
                reader.onload = (event) => {
                    if (event && event.target && event.target.result) {
                        const csv = csvParse(event.target.result, { columns: this.csvColumns }).slice(1);
                        resolve(csv);
                    }
                    reject();
                };
            });
        },
    },
};
</script>
