<template>
    <v-main>
        <FileUploadBar v-if="isLogin" class="file-upload-bar" />
        <UserTable :class="{'table-spacer': !isLogin}" />
    </v-main>
</template>

<style scoped>
.file-upload-bar {
    padding: 0 10%;
}

.table-spacer {
    margin-top: 2rem;
}
</style>

<script>
import { mapState } from 'vuex';

import FileUploadBar from '../organisms/FileUploadBar.vue';
import UserTable from '../organisms/UserTable.vue';

export default {
    components: {
        FileUploadBar,
        UserTable,
    },
    computed: {
        ...mapState([
            'isLogin',
        ]),
    },
};
</script>
