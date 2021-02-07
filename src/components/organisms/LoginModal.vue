<template>
    <v-row justify="center">
      <v-dialog
        v-model="showed"
        max-width="500"
      >
        <v-card>
          <v-card-title>ログイン情報を入力してください</v-card-title>
          <v-card-text>
            <v-text-field
                v-model="name"
                label="管理者名"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                label="パスワード"
                type="password"
                required
            ></v-text-field>
          </v-card-text>
  
          <v-alert v-if="errorMessage"
                   class="error-message"
                   type="error"
                   dense
          >
                {{ errorMessage }}
            </v-alert>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              dark
              @click="auth"
            >
              ログイン
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</template>

<style scoped>
.error-message {
  font-size: 0.8rem;
  width: 80%;
  margin: 0 auto;
}
</style>

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
      errorMessage: '',
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
          admin: this.$route.query.admin,
          username: this.name,
          password: this.password,
        }));
        if (response.status === 200) {
          localStorage.setItem('authJwt', JSON.parse(response.data).jwt);
          this.showed = false;
          this.name = '';
          this.password = '';
          this.errorMessage = '';
          this.login();
        }
      } catch (error) {
        this.errorMessage = '管理者名もしくはパスワードが不正です';
        console.error('login failed');
      }
    },
  },
}
</script>