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
    "
  >
    <h2 class="text-2xl md:ml-5 font-poppins font-bold md:mt-0 mt-5">AdminMe</h2>
    <div class="w-full md:w-4/6 lg:w-4/6 xl:w-3/6 h-16 flex items-center justify-around">
      <div class="w-full h-16 grid grid-cols-12">
        <ul class="col-start-1 col-end-13 md:col-end-10 h-16 w-full flex justify-evenly items-center pr-5">
          <Link text="Home" to="/" />
          <Link text="Dashboard" to="/" />
          <Link text="Products" to="/products" />
          <Link text="Sells" to="/sells" />
        </ul>
        <div class="hidden md:flex col-start-10 col-end-13 flex flex-row items-center justify-evenly h-16">
          <h3 class="text-purple">Username</h3>
          <img src="../assets/Avatar.svg" alt="Avatar" class="w-12" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Link from "../components/Link.vue";

export default {
  components: { Link },
};
</script>

<style>
</style>