<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.init()
  },
  methods: {
    ...mapActions(["setProducts", "setSells", "setUser"]),
    async init() {
      this.setProducts();
      this.setSells();
      this.setUser();
    }
  },
};
</script>

<style>
</style>