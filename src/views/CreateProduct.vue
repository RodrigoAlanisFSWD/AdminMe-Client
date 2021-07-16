<template>
  <div class="w-screen h-screen flex-col justify-center">
    <Navbar />
    <div class="w-full h-5/6 flex items-center justify-center">
      <div
        class="
          m-auto
          2xl:w-1/4
          xl:w-2/6
          lg:w-2/6
          md:w-3/6
          sm:w-4/6
          h-auto
          flex flex-col
          items-center
          border-1
          rounded-md
          shadow-lg
          border-gray-300
        "
      >
        <div class="mt-5 w-full">
          <h3 class="font-poppins text-3xl font-bold m-5">Create Product</h3>
          <div
            class="font-roboto text-black text-sm bg-gray-200 w-full py-3 px-5"
          >
            Create and register a new product on your inventory
          </div>
        </div>
        <form class="mt-3 w-full px-5 pb-5" @submit.prevent="submit()">
          <Input
            placeholder="Name"
            type="text"
            class="mt-5"
            :data="item"
            item="name"
          />
          <Input
            placeholder="Total"
            type="text"
            class="mt-5"
            :data="item"
            item="total"
          />
          <Input
            placeholder="Price"
            type="text"
            :data="item"
            item="price"
            class="mt-5"
          />
          <Input
            placeholder="Cost"
            type="text"
            :data="item"
            item="cost"
            class="mt-5"
          />

          <div class="w-full h-12 mt-14">
            <Button :text="'Create'" :primary="true" />
          </div>

          <div class="w-full h-12 mt-4" v-if="error">
            <Alert text="Insert All The Data!" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import uniqid from "uniqid";
import Alert from "../components/Alert.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Button, Input, Alert, Navbar },
  data() {
    return {
      item: {
        name: "",
        total: "",
        price: "",
        cost: "",
      },
      error: false,
    };
  },
  methods: {
    ...mapActions(["newProduct"]),
    submit() {
      if (
        this.item.name !== "" ||
        this.item.price !== "" ||
        this.item.cost !== ""
      ) {
        this.item.price = parseFloat(this.item.price);
        this.item.cost = parseFloat(this.item.cost);
        this.item.total = parseInt(this.item.total);
      } else {
        this.error = false;
        this.item = {
          name: "",
          total: "",
          price: "",
          cost: "",
        };
      }
      if (
        this.item.name.length > 0 &&
        this.item.price > 0 &&
        this.item.cost > 0
      ) {
        this.newProduct(this.item);
        this.error = false;
        this.item = {
          name: "",
          total: "",
          price: "",
          cost: "",
        };
        this.$router.push("/products");
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