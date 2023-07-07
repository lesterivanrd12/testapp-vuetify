<template>
    <div class="dashboard">
      <h2 class="subheading">Dashboard</h2>


      <v-container class="my-5">

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
              <div class="">{{ project.due }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text ">Status</div>
              <div class="">{{ project.status }}</div>
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
        { title: 'Design a new website', person: 'Francis Dave Moneva', due: '1st Nov 2023', status: 'overdue' },
        { title: 'Code up payroll backend', person: 'Jervin Latayada', due: '10th Dec 2023', status: 'ongoing' },
        { title: 'Design video thumbnails', person: 'Kenneth Carredo', due: '21st Nov 2023', status: 'complete' },
        { title: 'Create community forum', person: 'Neil Adrian Balolong', due: '28th Oct 2023', status: 'complete' }
      ],
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
</style>
