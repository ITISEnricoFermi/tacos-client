<template>
  <md-dialog :md-active.sync="dialog.visible">
    <md-dialog-title>Colors</md-dialog-title>
    <md-content class="content">
      <components :is="dialog.type" :dialog="dialog"></components>
    </md-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="close">Close</md-button>
      <!-- <md-button class="md-primary" @click="save">Save</md-button> -->
    </md-dialog-actions>
  </md-dialog>
</template>

<script>

import Colors from '@/components/colors.dialog/colors'

export default {
  props: ['dialog'],
  methods: {
    close () {
      this.$emit('close')
    }
    // save () {
    //   console.log('Dialog:', 'Save')
    // }
  },
  components: {
    appColors: Colors
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 0rem 1.5rem;
  text-align: center;
  max-width: 450px;
}
</style>
