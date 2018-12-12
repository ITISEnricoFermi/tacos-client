<template>
<main>
  <!-- <p v-for="i in 30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p> -->
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
      <md-button @click="toggle">{{ lamp ? 'Turn Off' : 'Turn On' }}</md-button>
    </md-card-actions>
  </md-card>
</main>
</template>

<script>
export default {
  data () {
    return {
      lamp: false
    }
  },
  methods: {
    toggle () {
      this.lamp = !this.lamp
    }
  }
}
</script>

<style scoped lang="scss">
.md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}
</style>
