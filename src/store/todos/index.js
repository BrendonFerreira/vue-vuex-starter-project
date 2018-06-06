import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
	list: [],
	fetching: false,
	fetched: false,
	error: null
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}