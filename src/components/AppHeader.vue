<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image storage</a>
    <div class="right menu">
      <div class v-if="isLoggedIn">Galleries Upload Logout</div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login"])
  },
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style scoped></style>
