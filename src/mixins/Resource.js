import { mapGetters, mapActions } from 'vuex'
import ResourceContent from './ResourceContent'

const GenericResourceMixin = (resource) => ({

	props: {
		'id': {
			type: [Number, String],
			required: true
		}
	},

	mounted() {
		this.fetch()
	},

	mixins: [ ResourceContent( resource ) ]

})


export default GenericResourceMixin