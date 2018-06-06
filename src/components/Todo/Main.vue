<template>

  <div class="main">
	  <h1>Todos</h1>
	  <todo-list :items="list" class="todo-list">
			<template slot="start">
				<create-item :create-at="0" />
			</template>
			<template slot="end">
				<create-item :create-at="list.length - 1" />
			</template>
		</todo-list>
	</div>

</template>

<script>

import { mapGetters } from 'vuex'
import TodoList from './Elements/List'
import CreateItem from './Elements/Create'
export default {
	name: 'main-todos',
	components: {
		TodoList,
		CreateItem
	},
	computed: mapGetters( 'todos', [ 'list' ] )
}

</script>

<style scoped>

	button.create-item {
		width: 100%;
		padding: 10px 20px;
		background-color: rgba(0,0,0,0.2);
		border: none;
		color: white;
	}

	.todo-list {
		background-color: rgba(0,0,0,0.1);
		padding: 10px 30px;
	}

	.main h1 {
		margin-left: 20px;
	}

</style>
