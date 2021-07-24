<template>
  <v-container fill-height fluid style="background-color:#ebecf0">
    <v-card class="mx-auto">
      <div class="d-flex justify-center">
        <div class="px-12 py-6 space-bottom">
          <h3 class="my-7 text-h6">Company Name</h3>
          <h2 class=" font-weight-light">Welcome to login page !</h2>
          <span class="">Welcome Back , Please login to your account.</span>
          <v-form class="my-4 space-bottom">
            <v-text-field
              v-model="username"
              filled
              tile
              label="Username"
              background-color="white"
              prepend-icon="mdi-account-outline"
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              filled
              tile
              label="Password"
              background-color="white"
              prepend-icon="mdi-lock-outline"
            ></v-text-field>
            <v-subheader>Forgot my password</v-subheader>
            <v-btn tile color="primary" @click="login">Login</v-btn>
          </v-form>
        </div>
        <div class="pa-4 px-20">
          <v-img src="@/assets/icons/login.svg"></v-img>
        </div>
      </div>
    </v-card>
  </v-container>
</template>
<script src="./Login.ts" lang="ts"></script>
