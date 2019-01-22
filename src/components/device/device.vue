<template>
  <md-card class="md-primary">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Lampadina</div>
        <div class="md-subhead">Salone</div>
      </md-card-header-text>

      <md-card-media>
        <img src="/images/lamp.png" alt="Avatar">
      </md-card-media>
    </md-card-header>

    <md-card-actions>
      <md-button @click="toggle">{{ state ? 'Turn Off' : 'Turn On' }}</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>

import {
  v1
} from '@/main'
import { log } from 'util';

export default {
  props: ['device'],
  data () {
    return {
      state: false
    }
  },
  created () {
    const { devid, state, type } = this.device
    this.state = Boolean(state)
  },
  methods: {
    async toggle () {
      const { devid } = this.device
      this.state = !this.state
      console.log(`/devices/${devid}/state/${String(this.state)}`);
      
      const reponse = await v1.put(`/devices/${devid}/state/${String(this.state)}`)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
