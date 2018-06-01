<template>
	<div class="task" :class="{'completed': resource.completed}">
		<div class="status-input">
			<input type="checkbox" v-model="completed">
		</div>
		<div class="content">
			<b @click="open(resource)">{{resource.content}}</b>
		</div>
		<div class="delete" @click="remove" v-if="resource.completed">
			<i class="material-icons">
				delete_outline
			</i>
		</div>
	</div>
</template>

<script>

import ResourceContent from '../../../mixins/ResourceContent.js'
import Details from './Details'
import TodoMixin from '../Mixins/TodoMixin.js'
export default {
	name:'todo-list-item',
	mixins: [ ResourceContent('todos'), TodoMixin ],
	methods: {
		open(  ) {
			this.$modal.show( Details, { props: { id: this.resourceId } } )
		}
	}
}
</script>

<style scoped>
	/* .completed {
		background-color: rgba(0,0,0,0.2);
	} */
	.task {
		padding: 10px 20px;
		display: flex;
    align-items: stretch;
    justify-content: stretch;
	}

	.content {
		flex-grow: 1;
	}

	.task.completed {
		background-color: rgba(0,0,0,0.2);
	}

	.task.completed .content {
		text-decoration: line-through;
		color: rgba(0,0,0,0.4)
	}

	.task .delete i {
		font-size: 20px;
	}
</style>
