<template>
    <v-content>
        <ResultForm />
    </v-content>
</template>

<style scoped>
</style>

<script>
import { mapState } from 'vuex';

import ResultForm from '../organisms/result.vue';

export default {
    components: {
        ResultForm,
    },
    computed: {
        ...mapState([
            'isLogin',
        ]),
    },
};
</script>
