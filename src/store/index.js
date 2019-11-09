import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiDomain: '32tz1gg2v9.execute-api.ap-northeast-1.amazonaws.com/dev',
        apiVersion: 'v1',
        isCompetitionTableLoaded: false,
        isUsersLoaded: false,
        csInfo: [],
        users: [],
    },
    mutations,
    actions,
    plugins: [createLogger()],
});
