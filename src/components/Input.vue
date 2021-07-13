<template>
  <input
        :type="type"
        class="
          shadow-md
          rounded
          w-full
          p-3
          outline-none
          text-gray-400
          focus:text-black
          transition 
          duration-300
        "
        :placeholder="placeholder"
        v-model="data[item]"
      />
</template>

<script>
export default {
    props: {
      placeholder: String,
      type: String,
      data: Object,
      item: String
    }
}
</script>

<style>

</style>