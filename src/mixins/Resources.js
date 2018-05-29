import { mapGetters, mapActions } from 'vuex'

export default GenericResourceMixin = (resource) => ({

	mounted() {
		this.fetch()
	},

	computed: {
		
		...mapGetters({
			'list': `${resource}/active`,
			'status': `${resource}/status`,
			'error': `${resource}/error`
		}),
		type() {
			return resource
		},
		loading() {
			return this.status === 'FETCHING'
		}

	},

	methods: {

		...mapActions({
			'fetchResources': `${resource}/list`,
			'createResource': `${resource}/create`,
			'deleteResource': `${resource}/delete`,
		}),

		fetch() {
			this.fetchResource(this.resourceId)
		},

		create() {
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