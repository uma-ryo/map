import axios from 'axios';

import {
    LOAD_COMPETITION_TABLE,
    UPDATE_COMPETITION_TABLE_LOADED_FLAG,
    LOAD_USERS,
    UPDATE_USERS_LOADED_FLAG,
} from './mutation_types';

export default {
    async [LOAD_COMPETITION_TABLE](context) {
        const response = await axios.get(`https://${context.state.apiDomain}/${context.state.apiVersion}/get-cs-info?admin=admin`);
        if (response.status === 200) {
            const { csInfo } = JSON.parse(response.data);
            context.commit(LOAD_COMPETITION_TABLE, csInfo);
            context.commit(UPDATE_COMPETITION_TABLE_LOADED_FLAG);
        }
    },
    async [LOAD_USERS](context) {
        const response = await axios.get(`https://${context.state.apiDomain}/${context.state.apiVersion}/get-users?admin=admin`);
        if (response.status === 200) {
            const { users } = JSON.parse(response.data);
            context.commit(LOAD_USERS, users);
            context.commit(UPDATE_USERS_LOADED_FLAG);
        }
    },
};
