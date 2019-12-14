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
                label="Administer Name"
                required
            ></v-text-field>
            <v-text-field
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
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</template>

<script>
export default {
  data() {
    return {
      showed: false,
    };
  },
  methods: {
    show() {
      this.showed = true;
    },
    hide() {
      this.showed = false;
    }, 
  },
}
</script>