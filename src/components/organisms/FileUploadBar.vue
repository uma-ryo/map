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
            更新
        </v-btn>
        <div v-if="isUploading" class="overlay">
            <div class="circular-bg">
                <v-progress-circular
                    indeterminate
                    color="primary"
                    :size="100"
                    :width="7"
                ></v-progress-circular>
            </div>
        </div>
        <div v-if="uploadCompleted" class="overlay">
            <v-alert :type="alertType">
                {{ alertMessage }}
            </v-alert>
        </div>
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
    font-size: 1rem;
    font-weight: bold;
}
.overlay {
    position: absolute;
    top: 15vh;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}
.circular-bg {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 5vw;
    border-radius: 3px;
}
</style>

<script>
import axios from 'axios';
import csvParse from 'csv-parse/lib/sync';
import { mapState, mapActions } from 'vuex';
import { LOAD_COMPETITION_TABLE, LOAD_USERS } from '../../store/mutation_types';

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
            isUploading: false,
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
            uploadCompleted: false,
            alertType: 'success',
            alertMessage: 'データを更新しました',
        };
    },
    computed: {
        ...mapState([
            'apiDomain',
            'apiVersion',
        ]),
        admin() {
            return this.$route.query.admin;
        },
    },
    methods: {
        ...mapActions({
            loadCompetitionTableAsync: LOAD_COMPETITION_TABLE,
            loadUsersAsync: LOAD_USERS,
        }),
        fileUpdate(file) {
            if (file) {
                this.file = file;
            }
        },
        async uploadFile() {
            if (!this.file) {
                return;
            }
            this.isUploading = true;
            const csv = await this.readFile(this.file);
            try {
                await Promise.all([
                    axios.post(`https://${this.apiDomain}/${this.apiVersion}/set-cs-info`, JSON.stringify({
                        admin: this.admin,
                        matches: this.parseToCompetitionTable(csv),
                    })),
                    axios.post(`https://${this.apiDomain}/${this.apiVersion}/set-users`, JSON.stringify({
                        admin: this.admin,
                        users: this.parseToUsers(csv),
                    })),
                ]);
                this.loadCompetitionTableAsync(this.$route.query.admin);
                this.loadUsersAsync(this.$route.query.admin);

                this.alertType = 'success';
                this.alertMessage = 'データを更新しました';
            } catch {
                this.alertType = 'error';
                this.alertMessage = 'データの更新に失敗しました';
            } finally {
                this.isUploading = false;
                this.uploadCompleted = true;
                setTimeout(() => {
                    this.uploadCompleted = false;
                }, 2000);
            }
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
                    no: line.user1No,
                    name: line.user1Name,
                    kana: line.user1Kana,
                    mp: line.user1Mp,
                    note: line.user1Note,
                },
                {
                    id: line.user2Id,
                    no: line.user2No,
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
