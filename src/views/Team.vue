<template>
  <div style="background-color: #fff; height:100%" class="pa-4 team">
    <h2 class="subheading">Team</h2>

    <v-container class="my-5">
        
        <v-row>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card class="text-center ma-4">
              <v-responsive class="pt-4">
                <v-avatar size="100" class="grey lighten-2">
                  <img :src="person.avatar" :alt="person.name">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{ person.name }}</div>
                <div class="grey--text">{{ person.role }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn plain color="grey">
                  <v-icon small left>mdi-message-text</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-row>

    </v-container>
      
  </div>
</template>

<script>

export default {
  data() {
    return {
      team: [
        { name: 'Francis Dave Moneva', role: 'Front-end Developer', avatar: '/avatar-1.png' },
        { name: 'Jerven Latayada', role: 'Back-end Developer', avatar: '/avatar-2.png' },
        { name: 'Kenneth Carredo', role: 'Video Editor', avatar: '/avatar-3.png' },
        { name: 'Neil Adrian Balolong', role: 'Project Manager', avatar: '/avatar-4.png' },
        { name: 'Lester Ivan Dalaguit', role: 'Full-stack Developer', avatar: '/avatar-5.png' },
      ]
    }
  },  
}
</script>
