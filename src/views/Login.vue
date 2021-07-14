<template>
  <div class="flex flex-col justify-start w-screen h-screen">
    <Navbar />
    <div class="w-screen h-full flex items-center justify-center">
      <form class="w-2/6 h-4/6 shadow-xl border border-gray-100 rounded">
        <div>
          <div class="m-8 text-4xl font-montserrat font-bold">Login</div>
          <div class="w-full bg-gray-200 p-3 pl-5">Sigin with your account</div>
        </div>
        <div class="p-5 h-3/4">
          <div class="h-3/5 flex flex-col justify-around">
            <Input
              :placeholder="'Username'"
              type="text"
              :data="login"
              item="username"
              class="h-14"
            />
            <Input
              :placeholder="'Password'"
              type="text"
              :data="login"
              item="password"
              class="h-14"
            />
            <div class="flex items-center mt-3 mb-5">
              <input
                type="checkbox"
                class="w-8 h-5 rounded border border-gray-600"
              />
              <p class="ml-2">
                I accept the terms of the offer of the
                <span class="text-purple">privacy policy</span>
              </p>
            </div>
          </div>

          <div class="h-14 mt-8">
            <Button text="Send" :primary="true" class="text-lg" />
          </div>
          <router-link to="/register" class="text-purple w-full flex items-center justify-center h-14 text-lg mt-5">
            Register
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

export default {
  components: {
    Navbar,
    Input,
    Button,
  },
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style>
</style>