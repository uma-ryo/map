import axios from 'axios';

import { LOAD, UPDATE_LOADED_FLAG } from './mutation_types';

export default {
    async [LOAD](context) {
        const response = await axios.get(`https://${context.state.apiDomain}/${context.state.apiVersion}/get-cs-info?admin=admin`);
        if (response.status === 200) {
            const { csInfo } = JSON.parse(response.data);
            context.commit(LOAD, csInfo);
            context.commit(UPDATE_LOADED_FLAG);
        }
    },
};
