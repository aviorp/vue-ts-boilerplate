<template>
  <div>
    <Appbar title="Title" :user="userState.user" />
    <Sidebar title="ts App Boilerplate" :navs="navs" />
    <router-view></router-view>
  </div>
</template>

<script src="./MainLayout.ts" lang="ts"></script>
