<template>
  <div class="details-wrapper">
    <div class="top">
      <div class="toggle">
        <input type="checkbox" v-model="completed" />
      </div>
      <div class="content">
        <input type="text" v-model="resource.content" />
      </div>
    </div>
    <textarea class="text" v-model="resource.description"></textarea>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import ResourceContent from '../../../mixins/ResourceContent.js'
import TodoMixin from '../Mixins/TodoMixin.js'
export default {
  name:"todo-form",
  mixins: [ ResourceContent('todos'), TodoMixin ]
}
</script>

<style scoped>
  .details-wrapper {
    padding: 30px;
    border-radius: 30px
  }
  
  .content input {
    font-size: 2em;
    border: 1px solid transparent;
    outline: none;
    padding: 2px 10px;
  }

  .content input:hover {
    border: 1px solid rgba(0,0,0,0.2)
  }

  .top {
    display: flex; 
    align-items: center;
  }

  .text {
    width: 100%;
    margin-top: 20px;
    border-radius: 3px;
    height: 100px;
  }

</style>
