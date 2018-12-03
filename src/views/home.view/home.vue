<template>
<div class="page-container">
  <md-app md-waterfall md-mode="fixed-last">
    <md-app-toolbar class="md-large md-dense md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <span class="md-title">Station</span>
        </div>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>
      <div class="md-toolbar-row">
        <md-tabs class="md-primary">
          <md-tab id="tab-home" md-label="Home"></md-tab>
          <md-tab id="tab-pages" md-label="Pages"></md-tab>
          <md-tab id="tab-posts" md-label="Posts"></md-tab>
          <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
        </md-tabs>
      </div>
    </md-app-toolbar>

    <md-app-drawer md-permanent="full">
      <md-toolbar class="md-transparent" md-elevation="0">
        Navigation
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>cast</md-icon>
          <span class="md-list-item-text">Station</span>
        </md-list-item>

        <md-list-item>
          <md-icon>devices_other</md-icon>
          <span class="md-list-item-text">Devices</span>
        </md-list-item>

        <!-- <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item> -->
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <p v-for="i in 100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
    </md-app-content>
  </md-app>
</div>
</template>

<script>
export default {
  name: 'Waterfall'
}
</script>

<style lang="scss" scoped>
.md-app {
    max-height: 100vh;
    border: 1px solid rgba(#000, .12);
}

.md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
}
</style>
