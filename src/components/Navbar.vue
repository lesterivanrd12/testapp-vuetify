<template>
    <nav>

        <v-app-bar app color="primary">
            <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase font-weight-bold">
                <span class="white--text">Human Resource Information System</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn elevation="0" color="primary">
                <span >Sign Out</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="">
            <!-- Nav Avatar -->
            <v-layout column align-center>
                <v-flex class="my-10">
                    <!-- <v-avatar size="100" class="grey lighten-2">
                        <img src="/avatar-5.png" >
                    </v-avatar>
                    <v-subheader>Lester Ivan Dalaguit</v-subheader> -->
                    <v-row class="mt-5" justify="center">
                        <v-avatar size="100">
                            <img src="/avatar-5.png" >
                        </v-avatar>
                    </v-row>
                    <v-row justify="center">
                        <div class="subheading">Lester Ivan Dalaguit</div>
                        <div class="grey--text">Full-stack Developer</div>
                    </v-row>
                </v-flex>
            </v-layout>

            <!-- Nav Links -->
            <v-list-item-group>
                <v-list-item
                    v-for="link in links"
                    :key="link.text"
                    router :to="link.route"
                >
                <v-list-item-icon>
                    <v-icon >{{ link.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
                { icon: 'mdi-folder', text: 'Projects', route: '/projects'},
                { icon: 'mdi-account', text: 'Team', route: '/team'},
            ]
        }
    }
}
</script>