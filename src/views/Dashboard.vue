<template>
    <div class="dashboard">
      <h2 class="subheading">Dashboard</h2>


      <v-container class="my-5">

        <v-layout row class="mx-1 my-5">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small plain @click="sortBy('title')" v-on="on">
                <v-icon left small>mdi-folder</v-icon>
                <span class="caption text-lowercase">By project name</span>
              </v-btn>
            </template>
            <span>Sort project by project name</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small plain @click="sortBy('person')" v-on="on">
                <v-icon left small>mdi-account</v-icon>
                <span class="caption text-lowercase">By person</span>
              </v-btn>
            </template>
            <span>Sort project by person</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small plain @click="sortBy('status')" v-on="on">
                <v-icon left small>mdi-list-status</v-icon>
                <span class="caption text-lowercase">By status</span>
              </v-btn>
            </template>
            <span>Sort project by status</span>
          </v-tooltip>
        </v-layout>

        <v-card class="pa-3 ma-3" v-for="project in projects" :key="project.title">
          <v-layout row wrap :class="`pa-10  project ${project.status}`">
            <v-flex xs12 md6>
              <div class="caption grey--text ">Project Title</div>
              <div class="">{{ project.title }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text ">Person</div>
              <div class="">{{ project.person }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text ">Due by</div>
              <v-chip>{{ project.due }}</v-chip>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="right">
                <v-chip class="v-chip--active white--text caption my-2"
                  :color="`${project.status}`" >{{ project.status }}</v-chip>
              </div>
            </v-flex>
          </v-layout>
        </v-card>

      </v-container>

    </div>

  
</template>

<script>

export default {
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'Francis Dave Moneva', due: '1st Nov 2023', status: 'overdue' , content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        { title: 'Code up payroll backend', person: 'Jervin Latayada', due: '10th Dec 2023', status: 'ongoing', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        { title: 'Design video thumbnails', person: 'Kenneth Carredo', due: '21st Nov 2023', status: 'complete', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        { title: 'Create community forum', person: 'Neil Adrian Balolong', due: '28th Oct 2023', status: 'complete' , content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
      ],
    }
  },

  methods: {
    sortBy(value) {
      this.projects.sort((a,b) => a[value] < b[value] ? -1 : 1 )
    }
  }
}
</script>

<style>
  .project.complete {
    border-left: 4px solid #4CAF50;
  }
  .project.ongoing {
    border-left: 4px solid #FFC107;
  }
  .project.overdue {
    border-left: 4px solid #FF5252;
  }

  .v-chip.complete {
    background: #4CAF50;
  }
  .v-chip.ongoing {
    background: #FFC107;
  }
  .v-chip.overdue {
    background: #FF5252;
  }
</style>
