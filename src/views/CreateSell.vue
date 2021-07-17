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
          <h3 class="font-poppins text-3xl font-bold m-5">Create A Sell</h3>
          <div
            class="font-roboto text-black text-sm bg-gray-200 w-full py-3 px-5"
          >
            Create and register a new sell for your dashboard
          </div>
        </div>
        <div class="mt-3 w-full px-5 pb-5">
          <Input
            placeholder="Name"
            type="text"
            class="mt-5"
            :data="item"
            item="name"
          />
          <div class="mt-5">
            <div class="h-10">
              <Button :text="'Add'" :primary="true" @click="showModal" />
            </div>
            <div style="max-height: 180px" class="overflow-y-scroll">
              <div
                v-for="item in item.products"
                :key="item.id"
                class="p-2 shadow-md mt-2 flex justify-between items-center"
              >
                <h3>{{ item.name }}</h3>
                <div class="flex w-2/4 justify-around items-center">
                  <p>total: {{ item.total }}</p>
                  <button
                    class="bg-purple rounded-full w-8 h-8 text-white"
                    @click="sumTotal(item)"
                  >
                    <i class="fas fa-plus"></i>
                  </button>
                  <button
                    class="bg-purple rounded-full w-8 h-8 text-white"
                    @click="minTotal(item)"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full h-12 mt-14">
            <Button @click="submit" :text="'Create'" :primary="true" />
          </div>

          <div class="w-full h-12 mt-4" v-if="error">
            <Alert text="Insert All The Data!" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="
      absolute
      top-0
      w-screen
      h-screen
      flex
      items-center
      justify-center
      modal-case
    "
    v-if="modal"
  >
    <div class="absolute bg-white rounded  w-3/4 md:w-2/4 h-2/4">
      <div class="flex justify-end w-full h-10">
        <i
          @click="closeModal"
          class="
            m-2
            fas
            fa-times
            absolute
            bg-purple
            w-10
            h-10
            rounded-full
            text-white
            flex
            items-center
            justify-center
            text-xl
            block
          "
        ></i>
      </div>
      <div class="p-5 overflow-y-scroll" style="max-height: 424px">
        <div
          v-for="item in getProducts('')"
          :key="item.id"
          class="
            p-2
            border border-gray-200
            rounded
            mt-2
            flex
            sm:flex-row
            flex-col
            justify-between
            items-center
            sm:h-14
            h-28
          "
        >
          <h3>{{ item.name }}</h3>
          <div class="flex w-full px-5 sm:w-2/4 2xl:w-1/4 justify-between sm:justify-around items-center">
            <p>total: {{ item.total }}</p>
            <div class="h-10">
              <Button :text="'Add'" :primary="true" @click="addProduct(item)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
        total: 0,
        products: [],
        earnings: 0,
      },
      modal: false,
      error: false,
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
  },
  methods: {
    ...mapActions(["newSell"]),
    submit() {
      if (this.item.name.length > 0 && this.item.products.length > 0) {
        console.log(this.item)
        this.newSell(this.item);
        this.error = false;
        this.item = {
          name: "",
          total: 0,
          products: [],
          earnings: 0,
        };
        this.$router.push("/sells");
      } else {
        this.error = true;
      }
    },
    addProduct(item) {
      if (this.item.products.find((el) => el.id === item.id) === undefined) {
        this.item.products.push({ product_id: item.id, name: item.name, total: 1 });
      } else {
        const index = this.item.products.findIndex((el) => el.id === item.product_id);
        this.sumTotal(this.item.products[index]);
      }
      this.modal = false;
      this.item.total += 1;
      this.item.earnings += this.getProducts("").find(
        (el) => el.id === item.product_id
      ).price;
    },
    showModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    sumTotal(item) {
      const product = this.getProducts("").find((el) => el.id === item.product_id);
      if (item.total < product.total) {
        item.total += 1;
        this.item.total += 1;
        this.item.earnings += this.getProducts("").find(
          (el) => el.id === item.product_id
        ).price;
      }
    },
    minTotal(item) {
      if (item.total > 1) {
        item.total -= 1;
        this.item.total -= 1;
        this.item.earnings -= this.getProducts("").find(
          (el) => el.id === item.id
        ).price;
      }
    },
  },
};
</script>

<style>
.modal-case {
  background: rgba(204, 204, 204, 0.274);
}
</style>