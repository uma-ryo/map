import { LOAD, UPDATE_LOADED_FLAG } from './mutation_types';

export default {
    [LOAD](state, csInfo) {
        state.csInfo = csInfo;
    },
    [UPDATE_LOADED_FLAG](state) {
        state.isLoaded = true;
    },
};
