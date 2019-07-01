<template>
  <div>
    <span>count is {{count}} </span>
    <span>plusOne is {{plusOne}} </span>
    <button @click="increment">count++</button>
  </div>
</template>

<script>
import { value, computed, watch, onMounted } from 'vue-function-api'
export default {
  setup () {
    const count = value(0)
    const plusOne = computed(() => count.value + 1)
    // method
    const increment = () => {
      count.value++
    }
    // watch
    watch(
      () => count.value * 2,
      val => {
        console.log(`count * 2 is ${val}`)
      }
    )
    onMounted(() => {
      console.log('mounted')
    })
    return {
      count,
      plusOne,
      increment
    }
  }
}
</script>

<style>

</style>
