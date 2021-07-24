<template>
  <v-navigation-drawer
    :value="true"
    width="300"
    height="100%"
    app
    clipped
    elevation="12"
    color="background"
  >
    <v-list>
      <v-list-item-group v-for="itemGroup in navs" :key="itemGroup.title">
        <v-subheader>{{itemGroup.groupTitle}}</v-subheader>
        <v-list-item v-for="item in itemGroup.navs" :key="item" :to="item.to" exact>{{
          item.title
        }}</v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list-item
      class="self-end background"

      @click="
        $router.replace({
          name: 'login',
        })
      "
      >Logout</v-list-item
    >
  </v-navigation-drawer>
</template>

<script src="./Sidebar.ts" lang="ts"></script>
