<template>
    <div style="background-color: #fff; height:100%" class="pa-4 projects">
        <h2 class="subheading">Users</h2>

        <v-container>
            <v-data-table
              height="700px"
              :headers="headers"
              :items="users"
              :items-per-page="10"
              class="elevation-1"
            >
            
            <template v-slot:item.actions="{ item }">
                <td>
                    <v-btn
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
                </td>
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
                { text: 'Full Name',  align: 'start', value: 'fullname'},
                { text: 'Email', align: 'start', value: 'email' },
                { text: 'Role',  align: 'start', value: 'role' },
                { text: 'Department',  align: 'start' ,value: 'department' },
                { text: 'Status', align: 'start', value: 'status' },
                { text: 'Date Employed', align: 'start', value: 'dateemployed' },
                { text: 'Date Cfullnamereated', align: 'start', value: 'datecreated' },
                { text: '', align:'center', value: 'actions', sortable: false },
            ],
            users: [
                {
                    fullname: 'Jerven Latayada',
                    email: 'jerven.latayada@gmail.com',
                    role: 'Back-end Developer',
                    department: 'Devs',
                    status: 'active',
                    dateemployed: '10th Dec 2021',
                    datecreated: '10th Dec 2021',
                    actions: ['view', 'edit', 'delete']
                },
                {
                    fullname: 'Francis Dave Moneva',
                    email: 'francis.moneva@gmail.com',
                    role: 'Front-end Developer',
                    department: 'Devs',
                    status: 'active',
                    dateemployed: '23rd Nov 2019',
                    datecreated: '23rd Nov 2019',
                    actions: ['view', 'edit', 'delete']
                },
                {
                    fullname: 'Kenneth Carredo',
                    email: 'kenneth.carredo@gmail.com',
                    role: 'Video Editor',
                    department: 'Creatives Department',
                    status: 'active',
                    dateemployed: '12th Feb 2018',
                    datecreated: '12th Feb 2018',
                    actions: ['view', 'edit', 'delete']
                },
                {
                    fullname: 'Neil Adrian Balolong',
                    email: 'neil.balolong@gmail.com',
                    role: 'Project Manager',
                    department: 'Admin',
                    status: 'active',
                    dateemployed: '22nd Jan 2020',
                    datecreated: '22nd Jan 2020',
                    actions: ['view', 'edit', 'delete']
                },
                {
                    fullname: 'Lester Ivan Dalaguit',
                    email: 'lesterivan.dalaguit@gmail.com',
                    role: 'Full-stack Developer',
                    department: 'Devs',
                    status: 'active',
                    dateemployed: '1st July 2020',
                    datecreated: '1st July 2020',
                    actions: ['view', 'edit', 'delete']
                },
            ],
        }
    },
}
</script>