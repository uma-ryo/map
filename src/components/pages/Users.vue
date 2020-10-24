<template>
    <v-main>
        <UserTable class="table-spacer" />
    </v-main>
</template>

<style scoped>
.table-spacer {
    margin-top: 2rem;
}
</style>

<script>
import UserTable from '../organisms/UserTable.vue';

export default {
    components: {
        UserTable,
    },
};
</script>
