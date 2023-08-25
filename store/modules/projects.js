
const initialState = () => ({
    // projects: {}
})

const state = () => {
    // return initialState()
} 

const mutations = {
    // SET_PROJECTS (state, payload) {
    //     state.projects = payload
    // }

    // RESET_STATE (state) {
    //     Object.assign(state, initialState())
    // }
}


const getters = {
    // projects: state => state.projects
}

const actions = {
    // GET_JOBS ({ commit }, payload) {
    //     return postApi(`/jobs`, payload)
    // },
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}