<template>
    <v-main v-if="isLogin">
        <FileUploadBar class="file-upload-bar" />
        <div class="qr-code-section">
            <VueQrcode class="qr-code" :value="currentUrl" />
        </div>
    </v-main>
</template>

<style lang="scss" scoped>
.file-upload-bar {
    padding: 0 10%;
    margin-top: 2rem;
}
.qr-code-section {
    display: flex;
    justify-content: center;
    align-content: center;
}

.qr-code {
    width: 20vw;
    @media screen and (max-width: 768px) {
        width: 40vw;
    }
    @media screen and (max-width: 544px) {
        width: 80vw;
    }
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
