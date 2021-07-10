import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiDomain: process.env.API_DOMAIN,
        apiVersion: process.env.API_VERSION,
        isLogin: false,
        isCompetitionTableLoaded: false,
        isUsersLoaded: false,
        csInfo: [],
        users: [],
    },
    mutations,
    actions,
    plugins: [createLogger()],
});
