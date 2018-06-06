export default {
	create( { commit }, payload ) {
		commit( 'CREATE_SUCCESS', payload )
	},
	toggle( { commit }, id ) {
		commit('UPDATE_SUCCESS', id )
	},
	removeById( { commit }, id ) {
		commit('DELETE_SUCCESS', id)
	},
	fetch( id ) {
		
	}
}