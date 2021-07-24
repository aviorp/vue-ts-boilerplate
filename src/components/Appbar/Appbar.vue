<template>
  <v-app-bar
    app
    fixed
    dense
    clipped-left
    color="secondary"
    class="items-center"
    dark
  >
    <v-app-bar-title>{{ title }}</v-app-bar-title>
    <v-spacer></v-spacer>
    <p class="my-auto">Hello, {{ `${user.firstName} ${user.lastName}` }}</p>
    <v-icon class="ml-2" small @click="$router.replace({ name: 'login' })"
      >mdi-logout</v-icon
    >
  </v-app-bar>
</template>

<script src="./Appbar.ts" lang="ts"></script>
