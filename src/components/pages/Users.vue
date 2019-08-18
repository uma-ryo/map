<template>
    <v-content>
        <FileUploadBar class="file-upload-bar" />
        <UserTable />
    </v-content>
</template>

<style scoped>
.file-upload-bar {
    padding: 0 10%;
}
</style>

<script>
import FileUploadBar from '../organisms/FileUploadBar.vue';
import UserTable from '../organisms/UserTable.vue';

export default {
    components: {
        FileUploadBar,
        UserTable,
    },
};
</script>
