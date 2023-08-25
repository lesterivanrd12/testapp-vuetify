<template>
  <v-layout>
    
    <v-container class="ma-5">
      <v-row class="mb-10">
        <h1 class="subheading">Projects</h1>
      </v-row>
      <v-row justify="center" align="center">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          placeholder="Search here..."
          outlined
        >
        </v-text-field>
        <v-spacer></v-spacer>
        <!-- <popup /> -->

        <v-dialog v-model="dialog" max-width="800">
        <template v-slot:activator="{on}">
            <v-btn
              v-on="on"
              dark
            >Add a new project</v-btn>
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
                        <v-menu offset-y close-on-click>
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                  class="ma-1"
                                  outlined
                                  v-model="form.title"
                                  label="Project Title"
                                ></v-text-field>
                                <v-text-field
                                  class="ma-1"
                                  outlined
                                  label="Due date"
                                  type="date"
                                  :value="formattedDate"
                                  v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="form.due"></v-date-picker>
                        </v-menu>
                    </v-row>
                    <v-row>
                      <v-autocomplete
                        v-model="form.person"
                        :items="accountList"
                        label="Person in charge"
                        class="ma-1" 
                        outlined
                        small-chips
                        deletable-chips
                      ></v-autocomplete>
                    </v-row>
                    <v-row>
                        <v-textarea
                          class="ma-1"
                          outlined
                          v-model="form.content"
                          label="Project Description"
                        ></v-textarea>
                    </v-row>
                    <v-flex class="d-flex justify-end">
                        <v-btn class="error mx-1 mt-3" @click="cancel">Cancel</v-btn>
                        <v-btn
                          class="success mx-1 mt-3"
                          @click="addProject"
                          :loading="loading"
                        >Add project</v-btn> 
                    </v-flex>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
        </v-card>
      </v-dialog>
      </v-row>

      <v-container>
        <v-data-table
          height="700px"
          :headers="projectHeader"
          :items="projects"
          :items-per-page="10"
          :loading="loading"
          loading-text="Loading... Please wait"
          class="elevation-1"
        >
        
        <template v-slot:item.content="{ item}">
          <td style="max-width: 500px">{{item.content}}</td>
        </template>

        <!-- <template v-slot:item.due="{ item }">
          <td style="max-width: 150px">{{item.due}}</td>
        </template> -->

        <template v-slot:item.actions="{ item }">
          <td style="max-width: 200px;">
            <!-- <v-btn
                icon
                elevation="0"
                tile
                small
                class="mx-1"
                :key="action"
            >
                <v-icon style="color: #f39c12">mdi-eye</v-icon>
            </v-btn>
            <v-btn
                icon
                elevation="0"
                tile
                small
                dark
                class="mx-1"
                :key="action"
            >
                <v-icon style="color: #22a7f0">mdi-pencil</v-icon>
            </v-btn> -->
            <v-btn
                icon
                elevation="0"
                tile
                small
                dark
                class="mx-1"
                :key="action"
                @click="deleteProject(item.document_id)"
            >
                <v-icon style="color: #fa2a00">mdi-delete</v-icon>
            </v-btn>
          </td>
        </template>
        </v-data-table>
      </v-container>
    </v-container> 
  </v-layout>

</template>

<script>
// import Popup from '../components/Popup'
import { mapActions, mapMutations } from 'vuex'
import database from '@/firebase'
import { collection, doc, getDocs, addDoc, deleteDoc } from "firebase/firestore"
import format from 'date-fns/format'
import swal from 'sweetalert';


export default {
  // components: {
  //   Popup,
  // },
  data() {
    return {
      dialog: false,
      loading: false,
      projectHeader: [
        { text: 'Project Title', align: 'start', value: 'title', sortable: false},
        { text: 'Project Description', align: 'start', value: 'content', sortable: false},
        { text: 'Assigned to', align: 'start', value: 'person', sortable: false},
        { text: 'Due date', align: 'start', value: 'due', sortable: false },
        { text: '', align: 'center', value: 'actions', sortable: false }
        // { text: 'Status', align: 'start', value: 'title', sortable: false }
      ],
      projects: [],
      form: {},
      title: null,
      person: null,
      due: null,
      status: null,
      content: null,
      accountList: [
        'Lester Ivan Dalaguit',
        'Jaya Erika Embodo',
        'Juan Dela Cruz',
        'John Doe',
        'Ada Lovelace'
      ],
    }
  },
  computed: {
      formattedDate() {
          return this.form.due ? (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10) : ''
      }
  },
  methods: {
    ...mapActions('projects', ['fetchProjects']),
    ...mapMutations('projects', ['SET_PROJECTS']),
    async getProjects() {
      this.projects = []
      this.loading = true
      const querySnapshot = await getDocs(collection(database, "projects"));
      querySnapshot.docs.forEach((doc) => {
        // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);

        const projectData = doc.data()
        this.projects.push(projectData)
        this.loading = false
      });
    },
    cancel() {
        this.dialog = false;
    },
    addProject() {
        this.loading = true
        const payload = addDoc(collection(database, "projects"), {
            title: this.form.title ? this.form.title : null,
            person: this.form.person ? this.form.person : null,
            due: this.form.due ? this.form.due : null,
            content: this.form.content ? this.form.content : null
        })
        console.log('Added to database', payload)
        swal({
          title: `Successfully Added!`,
          text: '',
          icon: 'success',
          confirmButtonColor: '#009c25',
          confirmButtonText: 'OK'
        })
        this.dialog = false
        this.loading = false
        this.form = {}
        this.getProjects()
    },
    async deleteProject(documentId) {
      const documentRef = doc(database, "projects", documentId)
      
      try {
        await deleteDoc(documentRef)
        console.log("Document successfully deleted!");
      } catch (error) {
        console.error("Error deleting document: ", error)
      }
      this.getProjects()
    },
    editProject() {

    }
  },
  mounted() {
    this.getProjects()
  },
}
</script>