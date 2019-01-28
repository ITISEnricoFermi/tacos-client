<template>
  <swatches v-model="color" inline @input="pick"></swatches>
</template>

<script>

import Swatches from 'vue-swatches'

import {
  v1
} from '@/main'

// Import the styles too, globally
import 'vue-swatches/dist/vue-swatches.min.css'

export default {
  props: ['dialog'],
  data () {
    return {
      color: '#1CA085'
    }
  },
  methods: {
    async pick () {
      const { id } = this.dialog.data
      const color = this.color.split('#')
      const response = await v1.put(`/devices/${id}/colors/${color[1]}`)
      this.$emit('pick', this.color)
      return response.data
      console.log('Color:', this.color)
    }
  },
  components: {
    Swatches
  }
}
</script>

<style lang="scss" scoped>
</style>
