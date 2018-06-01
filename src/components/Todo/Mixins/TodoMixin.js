export default {

	computed: {
		completed: {
			get() {
				return this.resource.completed		
			},
			set( value ){
				this.$store.dispatch( 'todos/toggle', this.id )
			}
		}
	}

}