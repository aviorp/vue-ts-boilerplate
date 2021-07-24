<template>
  <page-layout>
    <template v-slot:title>
      <h1 class="font-weight-light">Home Page.</h1>
    </template>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="n in 5" :key="n">{{ n }}</v-list-item>
      </v-list-item-group>
    </v-list>
  </page-layout>
</template>

<script src="./Home.ts" lang="ts"></script>
