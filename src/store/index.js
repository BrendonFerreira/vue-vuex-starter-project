import todos from './todos'
import createPersistedState from "vuex-persistedstate";

export default {
	modules: {
		todos
	},
  plugins: [createPersistedState()]
}