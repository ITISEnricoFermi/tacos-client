<template>
  <md-card class="md-primary">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ device.type.name }}</div>
        <div class="md-subhead">{{ device.id }}</div>
      </md-card-header-text>

      <md-card-media>
        <div class="icon">
          <i :class="icons[device.type.code]"></i>
        </div>
      </md-card-media>
    </md-card-header>

    <md-card-actions>
      <md-button @click="color">Color</md-button>
      <md-button @click="toggle">{{ state ? 'Turn On' : 'Turn Off' }}</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>

import {
  v1
} from '@/main'
import { log } from 'util'

export default {
  props: ['device'],
  data () {
    return {
      state: false,
      icons: ['fas fa-question', 'far fa-lightbulb']
    }
  },
  created () {
    const { id, state, type } = this.device
    this.state = Boolean(state)
  },
  methods: {
    async toggle () {
      const { id } = this.device
      this.state = !this.state
      const response = await v1.put(`/devices/${id}/state/${this.state}`)
      return response.data
    },
    color () {
      this.$emit('color')
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  height: 5rem;
  width: 5rem;
  background: linear-gradient(#e66465, #9198e5);

  i {
    display: block;
    text-align: right;
    font-size: 3.5rem;
    position: absolute;
    @include absCenter;
  }
}
</style>
