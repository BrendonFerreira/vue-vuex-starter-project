<template>
  <todos/>
</template>

<script>

import Todos from './Todo/Main'
export default {
  name: 'app',
  components: {
    Todos
  }
}

</script>

<style>
  
  @import url('https://fonts.googleapis.com/css?family=Dosis:300,400,500,600,700,800|Roboto:100,300,400,500,700,900');

  i.material-icons {
    display: block;
  }

  body {
    font-family: 'Roboto', sans-serif;
		font-weight: 300;
    margin: 0;
    padding: 0;
  }

</style>

