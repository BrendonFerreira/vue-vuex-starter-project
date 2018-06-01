import { mapGetters, mapActions } from 'vuex'

const ResourceContentMixin = (resource) => ({

	props: {
		'id': {
			type: [Number, String],
			required: true
		}
	},

	computed: {
		
		...mapGetters({
			'getById': `${resource}/getById`,
			'actions': `${resource}/actions`,
			'status': `${resource}/status`,
			'error': `${resource}/error`
		}),
		resourceId() {
			return this.id
		},
		resource() {
			return this.getById( this.resourceId )
		},
		type() {
			return resource
		},
		loading() {
			return this.status === 'FETCHING'
		},
		saving() {
			return this.status === 'PENDING'
		},
		canSave() {
			return !this.saving && !this.loading
		}
	},

	methods: {

		...mapActions({
			'fetchResource': `${resource}/fetch`,
			'saveResource': `${resource}/save`,
			'createResource': `${resource}/create`,
			'removeResource': `${resource}/removeById`,
		}),

		fetch() {
			this.fetchResource(this.resourceId)
		},

		async save() {

			if (this.saving) {
				this.onSaveWarning({
					error: 'IS_SAVING'
				})
				return
			}

			this.beforeSave(this.resource)

			try {
				await this.saveResource(this.resource)
			} catch (error) {
				this.onSaveError({
					error
				})
			}

			this.afterSave(this.resource)
		},

		remove() {
			this.removeResource( this.resourceId )
		},

		beforeSave() {
			console.log('is going to save resource')
		},

		afterSave() {
			console.log('is resource saved')
		},

		onSaveError(...args) {
			console.log('error on resource saved', ...args)
		},

		onSaveWarning(...warn) {
			console.warn('on resource save', ...warn)
		}

	}

})

export default ResourceContentMixin