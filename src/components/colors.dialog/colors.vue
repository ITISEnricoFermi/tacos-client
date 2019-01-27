<template>
  <swatches v-model="color" inline @input="pick"></swatches>
</template>

<script>

import Swatches from 'vue-swatches'

// Import the styles too, globally
import 'vue-swatches/dist/vue-swatches.min.css'

export default {
  data () {
    return {
      color: '#1CA085'
    }
  },
  methods: {
    pick () {
      console.log('Color:', this.color)
      this.$emit('pick', this.color)
    }
  },
  components: {
    Swatches
  }
}
</script>

<style lang="scss" scoped>
</style>
