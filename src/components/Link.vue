<template>
  <router-link class="px-1 text-gray-500 h-full flex items-center" :to="to">
    <span> {{ text }} </span>
  </router-link>
</template>

<script>
export default {
  props: {
    text: String,
    to: String,
  },
};
</script>

<style>
.active {
  border-bottom: 2px solid #6E41E2;
}

.active > span {
    color: black;
}
</style>