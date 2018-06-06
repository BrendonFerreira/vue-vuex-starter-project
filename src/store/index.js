import todos from './todos'
import createPersistedState from "vuex-persistedstate";

const persistedState = createPersistedState()

export default {
	modules: {
		todos
	},
  plugins: [ persistedState ]
}