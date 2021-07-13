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
    ...mapActions(["setProducts", "setSells"]),
    async init() {
      this.setProducts();
      this.setSells();
    }
  },
};
</script>

<style>
</style>