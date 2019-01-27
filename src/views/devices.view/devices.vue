<template>
<main class="main">
  <app-device v-for="(device, index) in devices" :key="index" :device="device" @color="showDialog(device.id, 'appColors')"></app-device>
 </main>
</template>

<script>
import {
  v1
} from '@/main'

import Device from '@/components/device/device'
import Dialog from '@/components/dialog/dialog'

export default {
  data () {
    return {
      dialog: {
        visible: false,
        type: undefined,
        data: {
          id: undefined
        }
      },
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
    },
    showDialog (id, type) {
      this.dialog.visible = true
      this.dialog.type = type
      this.dialog.data.id = id
    }
  },
  components: {
    appDevice: Device,
    appDialog: Dialog
  }
}
</script>

<style scoped lang="scss">
.main {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(3, 1fr);
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
    margin: 0!important !important;
}
</style>
