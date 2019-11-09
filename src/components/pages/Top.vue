<template>
    <v-content>
        <FileUploadBar class="file-upload-bar" />
        <MatchingTable />
    </v-content>
</template>

<style scoped>
.file-upload-bar {
    padding: 0 10%;
}
</style>

<script>
import FileUploadBar from '../organisms/FileUploadBar.vue';
import MatchingTable from '../organisms/MatchingTable.vue';

export default {
    components: {
        FileUploadBar,
        MatchingTable,
    },
};
</script>
