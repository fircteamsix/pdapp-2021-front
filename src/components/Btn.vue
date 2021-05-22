<template>
  <div id="buttoncustom">
    <q-btn  :color="color" :label="texto" :style="background" :outline="outline" :to="to" />
  </div>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    background: String,
    color: String,
    texto: String,
    outline: Boolean,
    to: String
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  #buttoncustom .q-btn {
    width: 269px;
    height: 52px;
  }
</style>
