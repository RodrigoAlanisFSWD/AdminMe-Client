<template>
  <button
    :class="
      primary
        ? 'bg-purple hover:bg-purple-dark active:bg-purple-darkest'
        : 'border-2 border-purple text-purple hover:bg-purple-light active:bg-purple-d'
    "
    class="text-white px-10 h-full rounded transition duration-300 w-full text-sm sm:text-md font-400"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    primary: Boolean,
  },
};
</script>

<style>
</style>