import {
    LOAD_COMPETITION_TABLE,
    LOAD_USERS,
    UPDATE_COMPETITION_TABLE_LOADED_FLAG,
    UPDATE_USERS_LOADED_FLAG,
    LOGIN,
    LOGOUT,
    CHECK_AUTH_JWT,
} from './mutation_types';

export default {
    [CHECK_AUTH_JWT](state) {
        state.isLogin = true;
    },
    [LOGIN](state) {
        state.isLogin = true;
    },
    [LOGOUT](state) {
        state.isLogin = false;
        localStorage.removeItem('authJwt');
    },
    [LOAD_COMPETITION_TABLE](state, csInfo) {
        state.csInfo = csInfo;
    },
    [LOAD_USERS](state, users) {
        state.users = users;
    },
    [UPDATE_COMPETITION_TABLE_LOADED_FLAG](state) {
        state.isCompetitionTableLoaded = true;
    },
    [UPDATE_USERS_LOADED_FLAG](state) {
        state.isUsersLoaded = true;
    },
};
