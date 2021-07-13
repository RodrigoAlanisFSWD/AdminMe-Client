<template>
  <div class="h-screen" :class="modal ? 'opacity-50' : ''">
    <Navbar />
    <div
      class="
        flex
        xl:flex-row
        flex-col
        items-center
        justify-between
        w-screen
        xl:h-16
        lg:h-32
        h-48
      "
    >
      <h2 class="h-16 flex items-center text-2xl xl:text-xl 2xl:text-2xl md:ml-5 font-poppins font-bold md:mt-0 mt-5">
        All The Sells
      </h2>
      <div
        class="
          w-full
          xl:w-5/6
          2xl:w-4/6
          md:h-16
          h-32
          flex
          md:flex-row
          flex-col
          items-center
          justify-around
          xl:pl-0
          pl-5
          md:pr-0
          pr-5
        "
      >
        <div class="w-full md:w-3/5 lg:w-4/6 h-16 flex items-center justify-between">
          <img src="../assets/search.svg" alt="search" class="absolute ml-2" />
          <input
            type="text"
            name="search"
            placeholder="Search"
            class="
              h-3/4
              border border-gray-300
              rounded
              pl-9
              w-full
              outline-none
              text-gray-400
              focus:text-black
              transition
              duration-300
            "
          />
        </div>
        <div class="w-full md:w-2/5 lg:w-2/6 h-16 md:h-3/4 flex justify-around xl:justify-evenly items-center">
          <div class="h-3/4 md:w-auto w-2/4 mr-2 md:mr-0 md:h-full">
            <Button text="Find" :primary="true"/>
          </div>
          <div class="h-3/4 md:w-auto w-2/4 ml-2 md:ml-0 md:h-full">
            <Button
              @click="() => $router.push('/create-sell')"
              text="Create Sell"
              :primary="true"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="p-5">
      <Sell
        :item="item"
        v-for="item in getSells(search)"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Sell from "../components/Sell.vue";
import Navbar from "../components/Navbar.vue";
import Input from "../components/Input.vue";
import { mapGetters } from "vuex";

export default {
  components: { Button, Sell, Navbar, Input },
  data() {
    return {
      modal: false,
      search: "",
    };
  },
  computed: {
    ...mapGetters(["getSells"]),
  },
};
</script>

<style scoped>
</style>