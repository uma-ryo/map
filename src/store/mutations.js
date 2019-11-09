import {
    LOAD_COMPETITION_TABLE,
    LOAD_USERS,
    UPDATE_COMPETITION_TABLE_LOADED_FLAG,
    UPDATE_USERS_LOADED_FLAG,
} from './mutation_types';

export default {
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
