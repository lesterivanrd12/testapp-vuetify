<template>
    <nav>

        <v-app-bar app flat color="secondary">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-capitalize font-weight-bold">
                <span>Human Resource Information System</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- Dropdown menu  -->
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn elevation="0" v-on="on" color="secondary">
                        <v-icon left class="grey--text">mdi-chevron-down</v-icon>
                        <span class="grey--text">Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title >{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn elevation="0" color="secondary">
                <span class="grey--text">Sign Out</span>
                <v-icon right class="grey--text">mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" color="primary">
            <!-- Nav Avatar -->
            <v-layout column align-center>
                <v-flex class="my-3">
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
                        <h1 class="white--text heading">Lester Ivan Dalaguit</h1>
                        <p class="white--text">Full-stack Developer</p>
                    </v-row>
                </v-flex>
            </v-layout>
            <v-divider
                class="my-3"
                color="white"
                style="height: 8px"
            ></v-divider>
            

            <!-- Dialog  -->
            <v-row justify="center" class="my-5">
                <Popup />
            </v-row>

            <!-- Nav Links -->
            <v-list-item-group>
                <v-list-item
                    v-for="link in links"
                    :key="link.text"
                    router :to="link.route"
                >
                <v-list-item-icon>
                    <v-icon color="thirtiary" >{{ link.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title style="color:#ffffff">{{ link.text }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup.vue'

export default {
    components: {
        Popup
    },
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