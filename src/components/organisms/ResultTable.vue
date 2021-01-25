<template>
    <div class="result-form">
        <v-card-title>
            {{ playTable }}番テーブル結果報告
            <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
            <v-form ref="test_form">
                <v-radio-group 
                    v-model="result.winnerId"
                    :rules="winrules"
                >
                    <v-radio
                        :label="user1Name"
                        :value="user1No"
                    ></v-radio>
                    <v-radio
                        :label="user2Name"
                        :value="user2No"
                    ></v-radio>
                    <v-radio
                        :label="`両者敗北`"
                        :value="-1"
                    ></v-radio>
                </v-radio-group>
                <v-text-field
                    v-model="result.user1Id"
                    type="number"
                    :label="`${ PLAYERb }のデュエマID(*)`"
                    :rules="dmidRules"
                    :counter="6"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="result.user2Id"
                    type="number"
                    :label="`${PLAYERb}のデュエマID(*)`"
                    :rules="dmidRules"
                    :counter="6"
                    required
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-action>
            <v-btn
                text
                v-on:click="submit"
                color="info"
            >結果報告</v-btn>
            <span v-if="success">勝者：{{ result.winnerId }}</span>
        </v-card-action>
    </div>
</template>

<style scoped>
.Resultbar {
    padding: 0 5%;
    margin: 0 5%;
}
</style>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return {
            user1No: '111',
            user2No: '999',
            user1Name: '1roTK',
            user2Name: 'ジロウ',
            playTable: '10',
            result: {
                winnerId: '',
                user1Id: '',
                user2Id: '',
            },
            winrules: [
                v => !!v || '勝者を選択してください'            
            ],
            dmidRules: [
                v => !!v || 'デュエマIDを入力してください',
                v => /^[0-9]*$/.test(v) || '数値で入力してください',
                v => (v.length <= 6) || '6文字で入力してください'
            ],
        };
    },
    
    methods: {
        submit() {
            if (this.$refs.test_form.validate())  {
                // alert($winner_id)
                alert( 'goodjob' )
                this.success = true;
            } else {
                this.success = false;
            }
        }

    },    
    computed: {
        ...mapState([
            'players',
        ]),
    },
};
</script>
