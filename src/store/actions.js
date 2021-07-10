import axios from 'axios';

import {
    CHECK_AUTH_JWT,
    LOAD_COMPETITION_TABLE,
    UPDATE_COMPETITION_TABLE_LOADED_FLAG,
    LOAD_USERS,
    UPDATE_USERS_LOADED_FLAG,
} from './mutation_types';

export default {
    async [CHECK_AUTH_JWT](context, admin) {
        const jwt = localStorage.getItem('authJwt');
        if (jwt) {
            try {
                const response = await axios.post(`https://${context.state.apiDomain}/${context.state.apiVersion}/is-authed`, JSON.stringify({
                    admin,
                    jwt,
                }));
                if (response.status === 200) {
                    context.commit(CHECK_AUTH_JWT);
                }
            } catch (error) {
                console.error('auth failed');
            }
        }
    },
    async [LOAD_COMPETITION_TABLE](context, admin) {
        const response = await axios.get(`https://${context.state.apiDomain}/${context.state.apiVersion}/get-cs-info${admin ? `?admin=${admin}` : ''}`);
        if (response.status === 200) {
            const { csInfo } = JSON.parse(response.data);
            context.commit(LOAD_COMPETITION_TABLE, csInfo);
            context.commit(UPDATE_COMPETITION_TABLE_LOADED_FLAG);
        }
    },
    async [LOAD_USERS](context, admin) {
        const response = await axios.get(`https://${context.state.apiDomain}/${context.state.apiVersion}/get-users${admin ? `?admin=${admin}` : ''}`);
        if (response.status === 200) {
            const { users } = JSON.parse(response.data);
            context.commit(LOAD_USERS, users);
            context.commit(UPDATE_USERS_LOADED_FLAG);
        }
    },
};
