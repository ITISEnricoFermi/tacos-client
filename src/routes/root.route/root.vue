<template>
<div class="page-container md-layout-row">
  <md-app>
    <md-app-toolbar class="md-dense md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <span class="md-title">{{ title }}</span>
        </div>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>
      <!-- <div class="md-toolbar-row">
        <md-tabs class="md-primary">
          <md-tab id="tab-home" md-label="Home"></md-tab>
          <md-tab id="tab-pages" md-label="Pages"></md-tab>
          <md-tab id="tab-posts" md-label="Posts"></md-tab>
          <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
        </md-tabs>
      </div> -->
    </md-app-toolbar>

    <md-app-drawer md-permanent="full">
      <md-toolbar class="md-transparent" md-elevation="0">
        Navigation
      </md-toolbar>

      <md-list>
        <router-link to="/" tag="md-list-item">
          <md-icon>cast</md-icon>
          <span class="md-list-item-text">Station</span>
        </router-link>

        <router-link to="/devices" tag="md-list-item">
          <md-icon>devices_other</md-icon>
          <span class="md-list-item-text">Devices</span>
        </router-link>

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
      <keep-alive>
        <!-- <transition name="fade" mode="out-in"> -->
          <router-view></router-view>
        <!-- </transition> -->
      </keep-alive>
    </md-app-content>
  </md-app>
</div>
</template>

<script>
export default {
  data () {
    return {
      title: undefined
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.title = to.meta.title
    next()
  }
}
</script>

<style scoped lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);

    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }
}

.md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
}
</style>
