<template>
    <v-content>
        <FileUploadBar v-if="isLogin" class="file-upload-bar" />
        <MatchingTable :class="{'table-spacer': !isLogin}"/>
    </v-content>
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
import MatchingTable from '../organisms/MatchingTable.vue';

export default {
    components: {
        FileUploadBar,
        MatchingTable,
    },
    computed: {
        ...mapState([
            'isLogin',
        ]),
    },
};
</script>
