<template>
    <q-btn  :label="texto" :style="background" outline />
</template>

<script>
export default {
  name: 'Btn',
  props: {
    background: String,
    texto: String,
  },
  data () {
    return {
    }
  }
}
</script>
