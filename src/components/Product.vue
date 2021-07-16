<template>
  <div
    class="
      border border-gray-300
      rounded
      p-4
      flex
      lg:flex-row
      flex-col
      justify-between
      items-center
      xl:h-16
      lg:h-16
      h-48
      mb-4
    "
  >
    <h2 class="text-lg">{{ item.name }}</h2>
    <div
      class="
        w-full
        lg:w-3/4
        2xl:w-2/4
        h-32
        lg:h-full
        flex
        lg:flex-row
        flex-col
        items-center
        justify-around
        lg:justify-end
        mt-3
        lg:mt-0
      "
    >
      <ul class="flex items-center justify-around w-full lg:w-2/4 xl:w-3/5">
        <li class="font-poppins text-sm xl:text-md">Total: {{ item.total }}</li>

        <li class="font-poppins text-sm xl:text-md">
          Price: {{ item.price }}$
        </li>
        <li class="font-poppins text-sm xl:text-md">
          Production Cost: {{ item.cost }}$
        </li>
      </ul>
      <div
        class="
          w-full
          h-12
          lg:h-auto
          lg:w-3/5
          xl:w-2/5
          flex
          justify-around
          lg:justify-evenly
        "
      >
        <div class="w-2/4 lg:w-2/5 mr-2 lg:mr-1 h-10">
          <Button text="Edit" :primary="false" class="ml-0 lg:ml-5" />
        </div>
        <div class="w-2/4 lg:w-2/5 ml-2 lg:ml-1 h-10">
          <Button
            @click="deleteProduct(item.id)"
            text="Delete"
            :primary="true"
            class="ml-0 lg:ml-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Button from "../components/Button.vue";

export default {
  props: {
    item: Object,
  },
  components: {
    Button,
  },
  methods: {
    ...mapActions(["deleteProduct"]),
  },
};
</script>

<style>
</style>