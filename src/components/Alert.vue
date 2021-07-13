<template>
  <div
    class="bg-red-500 w-full h-full rounded text-white flex items-center pl-5"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
    props: {
        text: String
    }
};
</script>

<style>
</style>