<template>
	<div class="list">
		<div class="list-item">
			<slot name="start"></slot>
		</div>
		<div v-for="(todo, index) of items" :key="index"  class="list-item"> 
			<todo-item :id="todo.id" />
		</div>
		<div class="list-item">
			<slot name="end"></slot>
		</div>
	</div>
</template>

<script>
import TodoItem from './ListItem'
export default {
	name:'todo-list',
	components: {
		TodoItem
	},
	props: {
		items: {
			type: Array
		}
	}
}
</script>

<style scoped>
	.list-item {
		margin-top: 10px;
		box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
		transition: all 0.2s;
	}
	.list-item:hover {

		box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
		transform: translateY(-2px);
		transition: all 0.2s;
	}
</style>
