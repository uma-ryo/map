<template>
    <v-row justify="center">
      <v-dialog
        v-model="showed"
        max-width="500"
      >
        <v-card>
          <v-card-title>Login</v-card-title>
  
          <v-card-text>
            <v-text-field
                v-model="name"
                label="Administer Name"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                label="Password"
                :type="'password'"
                required
            ></v-text-field>
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="auth"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</template>

<script>
import axios from 'axios';
import { mapState, mapMutations } from 'vuex';
import { LOGIN } from '../../store/mutation_types';

export default {
  data() {
    return {
      showed: false,
      name: '',
      password: '',
    };
  },
  computed: {
    ...mapState([
      'apiDomain',
      'apiVersion',
    ]),
  },
  methods: {
    ...mapMutations({
      login: LOGIN,
    }),
    show() {
      this.showed = true;
    },
    async auth() {
      try {
        const response = await axios.post(`https://${this.apiDomain}/${this.apiVersion}/auth`, JSON.stringify({
          username: this.name,
          password: this.password,
        }));
        if (response.status === 200) {
          localStorage.setItem('authJwt', JSON.parse(response.data).jwt);
          this.showed = false;
          this.name = '';
          this.password = '';
          this.login();
        }
      } catch (error) {
        console.error('login failed');
      }
    },
  },
}
</script>