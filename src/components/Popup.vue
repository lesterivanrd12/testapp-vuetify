<template>
    <v-dialog max-width="600px">
        <template v-slot:activator="{on}">
        <v-btn color="" v-on="on" dark>Add a new project</v-btn>
        </template>
        <v-card>
        <v-card-title>
            <h3>Add a new project</h3>
        </v-card-title>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    
}
</script>