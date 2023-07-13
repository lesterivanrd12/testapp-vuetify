<template>
    <v-dialog v-model="dialog" max-width="800">
        <template v-slot:activator="{on}">
        <v-btn color="" v-on="on" dark>Add a new project</v-btn>
        </template>

        <v-card class="pa-4">
            <v-card-title>
                <h3>Add a new project</h3>
            </v-card-title>
            <v-form>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-row>
                                <v-text-field outlined v-model="form.title" placeholder="Project Title" prepend-inner-icon="mdi-folder"></v-text-field>
                                <v-text-field class="ml-3" outlined v-model="form.person" placeholder="Person" prepend-inner-icon="mdi-account"></v-text-field>
                            </v-row>
                            <v-row>
                                <v-textarea outlined v-model="form.content" placeholder="Details" prepend-inner-icon="mdi-pencil"></v-textarea>
                            </v-row>
                            <v-flex class="d-flex justify-end">
                                <v-btn class="error mx-1 mt-3" @click="cancel">Cancel</v-btn>
                                <v-btn class="success mx-1 mt-3" @click="add">Add project</v-btn> 
                            </v-flex>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            form: [{
                title: '',
                person: '',
                due: '',
                status: '',
                content: '',
            }]
        };
    },

    mounted() {
        
    },

    methods: {
        cancel() {
            this.dialog = false;
        },
        add() {
            console.log('form', this.form)
        }
    }
}
</script>