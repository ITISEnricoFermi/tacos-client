<template>
<main class="main">
  <app-device v-for="(device, index) in devices" :key="index" :device="device"></app-device>
</main>
</template>

<script>

import {
  v1
} from '@/main'

import Device from '@/components/device/device'

export default {
  data () {
    return {
      devices: []
    }
  },
  async created () {
    this.devices = await this.getDevices()
  },
  methods: {
    async getDevices () {
      const response = await v1.get('/devices')
      return response.data
    },
    async toggle () {
      const response = await v1.get('/devices/state/')
      return response.data
    }
  },
  components: {
    appDevice: Device
  }
}
</script>

<style scoped lang="scss">

.main {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @include respond(tab-lan) {
    grid-template-columns: 1fr 1fr;
  }

  @include respond(tab-por) {
    grid-template-columns: 1fr;
  }

}

.md-card {
    // width: 320px;
    display: inline-block;
    vertical-align: top;
    margin: 0!important;
}
</style>
