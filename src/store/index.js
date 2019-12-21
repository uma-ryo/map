import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiDomain: 'm3eo60jt36.execute-api.ap-northeast-1.amazonaws.com/dev',
        apiVersion: 'v1',
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
