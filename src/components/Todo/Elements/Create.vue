<template>
  <div class="create">
		<div class="create-icon" @click="enableInput" v-if="!creating">
			<i class="material-icons">
				add_circle_outline
			</i>
		</div>
    <input @blur="create" type="text" ref="create" v-model="content" @keyup.enter="create">
  </div>
</template>

<script>
export default {
  name:"todo-form",
  data() {
    return {
			content: '',
			creating: false
    }
  },
  methods: {
    create(  ) {

			if( this.content.length > 0 ) { 
				this.$store.dispatch("todos/create", { content: this.content })
			}
			this.content = ''
			this.creating = false
			this.$refs.create.blur()
		},
		enableInput() {
			this.creating = true
			this.$refs.create.focus()
		}
  }
}
</script>

<style scoped>
	.create {
		padding: 10px 20px;
		position: relative;
	}

	.create-icon {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		right: 0;
		left: 0;
		color: rgba(0,0,0,0.1);
	}

	.create-icon i {
		font-size: 20px !important;
	}

	.create-icon:hover {
		color: rgba(0,0,0,0.3)
	}

	.create input {
		width: 100%;
		border: none;
		outline: none;
	}
</style>