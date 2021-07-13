<template>
  <div
    v-if="modal"
    class="
      border border-2-gray-400
      w-2/5
      shadow-lg
      fixed
      bg-white
      modal
      rounded
      px-10
    "
  >
    <div style="max-height: 520px">
      <div
        class="
          absolute
          top-0
          right-0
          m-2
          bg-purple
          text-white
          w-10
          h-10
          rounded-full
          flex
          items-center
          justify-center
          pointer
        "
        @click="$emit('close')"
      >
        <i class="fas fa-times text-lg"></i>
      </div>
      <div class="mt-5">
        <h3 class="font-poppins text-3xl font-bold">Create Product</h3>
        <p class="font-roboto text-gray-600">
          Create and register a new product on your inventory
        </p>
      </div>
      <form class="mt-3" @submit.prevent="submit()">
        <Input
          placeholder="Name"
          type="text"
          class="mt-3"
          :data="item"
          item="name"
        />
        <p class="text-gray-500 ml-1 mt-1">Enter The Name Of The Product</p>
        <Input
          placeholder="Total"
          type="number"
          class="mt-3"
          :data="item"
          item="total"
        />
        <p class="text-gray-500 ml-1 mt-1">Enter The Total Of Products</p>

        <div class="flex">
          <div class="mt-3 mr-2 w-2/4">
            <Input
              placeholder="Price"
              type="number"
              :data="item"
              item="price"
            />
            <p class="text-gray-500 ml-1 mt-1">
              Enter The Price Of The Product
            </p>
          </div>
          <div class="mt-3 ml-2 w-2/4">
            <Input placeholder="Cost" type="number" :data="item" item="cost" />
            <p class="text-gray-500 ml-1 mt-1">Enter The Production Cost</p>
          </div>
        </div>
        <div class="w-25 h-12 mt-5">
          <Button :text="'Create'" :primary="true" />
        </div>

        <div class="w-full h-12 mt-4" v-if="error">
          <Alert text="Insert All The Data!" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Button from "./Button.vue";
import Input from "./Input.vue";
import uniqid from "uniqid";
import Alert from "./Alert.vue";

export default {
  props: {
    modal: Boolean,
  },
  components: { Button, Input, Alert },
  data() {
    return {
      item: {
        id: "",
        name: "",
        total: 0,
        price: 0,
        cost: 0,
      },
      error: false,
    };
  },
  methods: {
    ...mapActions(["newProduct"]),
    submit() {
      if (
        this.item.name.length > 0 &&
        this.item.price > 0 &&
        this.item.cost > 0
      ) {
        this.item.id = uniqid();
        this.newProduct(this.item);
        this.error = false;
        this.item = {
          id: "",
          name: "",
          total: 0,
          price: 0,
          cost: 0,
        };
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style>
.modal {
  top: 23%;
  bottom: 0;
  left: 30%;
  height: 450;
  max-height: 520px;
}

@media screen and (max-width: 1250px) {
  .modal {
    max-height: 540px;
  }
}
</style>