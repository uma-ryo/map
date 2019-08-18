import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiDomain: '3wx3wmlkvb.execute-api.ap-northeast-1.amazonaws.com/dev',
        apiVersion: 'v1',
        isLoaded: false,
        csInfo: [],
    },
    mutations,
    actions,
    plugins: [createLogger()],
});
