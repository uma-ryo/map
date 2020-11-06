<template>
    <v-main v-if="isLogin">
        <v-card class="tool-card">
            <v-card-title>CSVアップロード</v-card-title>
            <FileUploadBar class="file-upload-bar" />
        </v-card>
        <v-card class="tool-card qr-code-card">
            <v-card-title>QRコード</v-card-title>
            <VueQrcode class="qr-code" :value="currentUrl" />
        </v-card>
    </v-main>
</template>

<style lang="scss" scoped>
.tool-card {
    margin: 15px;
}
.file-upload-bar {
    padding: 0 5%;
}

.qr-code-card {
    width: 20vw;
    @media screen and (max-width: 768px) {
        width: 40vw;
    }
    @media screen and (max-width: 544px) {
        width: calc(100% - 30px);
    }
}
.qr-code {
    width: 100%;
}
</style>

<script>
import { mapState } from 'vuex';
import VueQrcode from 'vue-qrcode';

import FileUploadBar from '../organisms/FileUploadBar.vue';

export default {
    components: {
        FileUploadBar,
        VueQrcode,
    },
    computed: {
        ...mapState([
            'isLogin',
        ]),
        currentUrl() {
            const protocol = window.location.protocol;
            const hostname = window.location.hostname
            return `${protocol}//${hostname}?admin=${this.$route.query.admin}`;
        },
    },
};
</script>
