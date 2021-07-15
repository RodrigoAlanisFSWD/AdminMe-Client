<template>
  <nav
    class="
      flex
      md:flex-row
      flex-col
      items-center
      justify-between
      w-screen
      border-b-2 border-gray-200
      md:h-16
      h-32
      bg-white
    "
    style="z-index: 10000"
  >
    <h2 class="text-2xl md:ml-5 font-poppins font-bold md:mt-0 mt-5">AdminMe</h2>
    <div class="w-full md:w-4/6 lg:w-4/6 xl:w-3/6 h-16 flex items-center justify-around">
      <div class="w-full h-16 grid grid-cols-12">
        <ul :class="[getUser.token ? 'md:col-end-10' : '']" class="col-start-1 col-end-13 h-16 w-full flex justify-evenly items-center pr-5">
          <Link text="Home" to="/" />
          <Link v-if="getUser.token" text="Dashboard" to="/" />
          <Link v-if="getUser.token" text="Products" to="/products" />
          <Link v-if="getUser.token" text="Sells" to="/sells" />
          <Link v-if="!getUser.token" text="Register" to="/register" />
          <Link v-if="!getUser.token" text="Login" to="/login" />
        </ul>
        <div v-if="getUser.token" class="hidden md:flex col-start-10 col-end-13 flex flex-row items-center justify-evenly h-16">
          <h3 class="text-purple">{{ getUser.username }}</h3>
          <img :src="'http://localhost:3000/assets/' + getUser.avatar" alt="Avatar" class="w-12" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import Link from "../components/Link.vue";
import Button from "../components/Button.vue";

export default {
  components: { Link, Button },
  computed: {
    ...mapGetters(["getUser"])
  }
};
</script>

<style>
</style>