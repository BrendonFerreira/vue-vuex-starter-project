export default  {

	'CREATE_SUCCESS'( state , payload ) {
		const content = payload;
		content.id = Math.random().toString(36).substring(7)
		state.list.splice( content.index, 0, content )
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

}