<template>
    <v-main>
        <MatchingTable class="table-spacer"/>
    </v-main>
</template>

<style scoped>
.table-spacer {
    margin-top: 2rem;
}
</style>

<script>
import MatchingTable from '../organisms/MatchingTable.vue';

export default {
    components: {
        MatchingTable,
    },
};
</script>
