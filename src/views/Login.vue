<template>
  <div class="flex flex-col justify-start w-screen h-screen">
    <Navbar />
    <div class="w-screen h-full flex items-center justify-center">
      <form
        @submit.prevent="submit()"
        class="
          w-full
          sm:w-4/6
          md:w-3/6
          xl:w-2/6
          h-3/4
          xl:h-4/6
          shadow-xl
          border border-gray-100
          rounded
          form-login
        "
      >
        <div>
          <div class="m-8 text-3xl md:text-4xl font-montserrat font-bold">
            Login
          </div>
          <div class="w-full bg-gray-200 p-3 pl-5">Sigin with your account</div>
        </div>
        <div class="p-5 h-3/4 flex flex-col justify-between">
          <div>
            <Input
              :placeholder="'Username'"
              type="text"
              :data="login"
              item="username"
              class="h-14 mt-5"
            />
            <Input
              :placeholder="'Password'"
              type="text"
              :data="login"
              item="password"
              class="h-14 mt-8"
            />
            <div class="flex items-center mt-5 mb-5">
              <input
                type="checkbox"
                class="w-8 h-5 rounded border border-gray-600"
              />
              <p class="ml-2 text-md lg:text-lg">
                I accept the terms of the offer of the
                <span class="text-purple">privacy policy</span>
              </p>
            </div>
          </div>

          <div>
            <div class="h-12 md:h-14">
              <Button text="Send" :primary="true" class="text-md md:text-lg" />
            </div>
            <div class="text-md md:text-lg h-12 md:h-14 flex w-full items-center justify-center text-white bg-red-700 mt-5 rounded">
              {{ error }}
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import axios from 'axios';
import { mapActions } from "vuex";
import Cookie from 'universal-cookie'

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
      error: "Enter All The Data"
    };
  },
  methods: {
    ...mapActions(["setUser"]),
    async submit() {
      try {
        const cookie = new Cookie()

        const { data } = await axios({
          method: "POST",
          url: "http://localhost:3000/api/auth/login",
          data: this.login
        })

        if (data.res == 101) {
          this.error = "The Username Dont Exists"
          return 
        }

        if (data.res == 102) {
          this.error = "The Password Is Invalid"
          return 
        }

        cookie.set("token", data.token, {
          path: "/",
          maxAge: 60 * 60 * 72,
          domain: "localhost"
        })

        this.setUser()
      } catch (error) {
        console.error(error)
      }
    }
  }
};
</script>

<style>
.form-login {
  height: 600px !important;
}
</style>