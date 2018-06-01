export default {

	namespaced: true,

	state: {
		list: [],
	},

	getters: {
		list( state ) {
			return state.list
		},
		getById( state ){
			return id => state.list.find( item => item.id === id )
		}
	},

	mutations: {
		'CREATE_SUCCESS'( state , content ) {
			content.id = Math.random().toString(36).substring(7)
			state.list.push( content )
		},
		'UPDATE_SUCCESS'( state , id ) {
			const index = state.list.findIndex( item => item.id === id )
			if( index < 0 ) return
			const item = state.list[index]
			item.completed = !item.completed
			state.list.splice( index, 1, item )					
		},
		'DELETE_SUCCESS'( state , id ) {
			const index = state.list.findIndex( item => item.id === id )
			if( index < 0 ) return
			
			state.list.splice( index, 1 )					
		}
	},

	actions: {
		create( { commit }, content ) {
			commit( 'CREATE_SUCCESS', content )
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
	
}