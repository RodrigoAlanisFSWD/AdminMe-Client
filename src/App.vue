<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
    this.init();
  },
  methods: {
    ...mapActions(["setProducts", "setSells", "setUser"]),
    async init() {
      await this.setUser();
      await this.setProducts();
      console.log("ready")
      await this.setSells();
    },
  },
};
</script>

<style>
</style>