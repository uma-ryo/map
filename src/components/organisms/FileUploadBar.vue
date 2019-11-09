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

            const url = `https://${this.apiDomain}/${this.apiVersion}/set-cs-info`;
            const data = await axios.post(url, JSON.stringify({
                csvString: csv,
            }));

            console.log(data);
        },
        readFile(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.readAsText(file, 'shift_jis');
                reader.onload = (event) => {
                    if (event && event.target && event.target.result) {
                        resolve(event.target.result);
                    }
                    reject();
                };
            });
        },
    },
};
</script>
