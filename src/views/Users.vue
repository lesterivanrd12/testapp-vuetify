<template>
    <div style="background-color: #f5f5f5; height:100%" class="pa-4 projects">
        <h2 class="subheading">Users</h2>

        <v-container>
            <v-data-table
            height="700px"
            :headers="headers"
            :items="users"
            :items-per-page="10"
            class="elevation-1"
            >
            
            <template v-slot:[`item.actions`]="{ item }">
                <template v-for="action in item.actions">
                    <v-btn
                        v-if="action === 'view'"
                        elevation="0"
                        tile
                        small
                        color="#f39c12"
                        class="mx-1"
                        :key="action"
                    >
                        <v-icon style="color: white">mdi-eye</v-icon>
                    </v-btn>
                    <v-btn
                        v-if="action === 'edit'"
                        elevation="0"
                        tile
                        small
                        color="#22a7f0"
                        dark
                        class="mx-1"
                        :key="action"
                    >
                        <v-icon style="color: white">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                        v-if="action === 'delete'"
                        elevation="0"
                        tile
                        small
                        color="#fa2a00"
                        dark
                        class="mx-1"
                        :key="action"
                    >
                        <v-icon style="color: white">mdi-delete</v-icon>
                    </v-btn>
                </template>
            </template>


            </v-data-table>
        </v-container>
                
    </div>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                { text: 'Full Name', align: 'start', value: 'fullname',},
                { text: 'Email', value: 'email' },
                { text: 'Role', value: 'role' },
                { text: 'Department', value: 'department' },
                { text: 'Status', value: 'status' },
                { text: 'Date Employed', value: 'dateemployed' },
                { text: 'Date Created', value: 'datecreated' },
                { text: 'Actions', align:'center', value: 'actions' },
            ],
            users: [
                {
                    fullname: 'Jerven Latayada',
                    email: 159,
                    role: 6.0,
                    department: 24,
                    status: 4.0,
                    dateemployed: 1,
                    datecreated: 1,
                    actions: ['view', 'edit', 'delete']
                },
                {
                    fullname: 'Francis Dave Moneva',
                    email: 237,
                    role: 9.0,
                    department: 37,
                    status: 4.3,
                    dateemployed: 1,
                    datecreated: 1,
                    actions: ['view', 'edit', 'delete']
                },
                {
                    fullname: 'Kenneth Carredo',
                    email: 262,
                    role: 16.0,
                    department: 23,
                    status: 6.0,
                    dateemployed: 7,
                    datecreated: 1,
                    actions: ['view', 'edit', 'delete']
                },
                {
                    fullname: 'Neil Adrian Balolong',
                    email: 262,
                    role: 16.0,
                    department: 23,
                    status: 6.0,
                    dateemployed: 7,
                    datecreated: 1,
                    actions: ['view', 'edit', 'delete']
                },
                {
                    fullname: 'Lester Ivan Dalaguit',
                    email: 262,
                    role: 16.0,
                    department: 23,
                    status: 6.0,
                    dateemployed: 7,
                    datecreated: 1,
                    actions: ['view', 'edit', 'delete']
                },
            ],
        }
    },
}
</script>