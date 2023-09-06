<script setup lang="ts">
// Here we are defining what properties we want to be able to set from where we call this!
defineProps<{
  msg: string
  // You can add more here for example:
  // aNumberField: number,
  // aTrueOrFalseField: boolean
}>()
</script>

<template>
  <div class="greetings">
    <!-- See how we are passing in a prop "msg" here that is coming from where we use the HelloWorld component in App.vue -->
    <h3 class="green">{{ msg }}</h3>
    <h3>
      This is coming from the Hello World component (HelloWorld.vue)!
    </h3>
  </div>
</template>

<style scoped>
</style>
