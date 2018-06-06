export default {
	list( state ) {
		return state.list
	},
	getById( state ){
		return id => state.list.find( item => item.id === id )
	}
}