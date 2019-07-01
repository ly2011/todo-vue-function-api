<template>
  <div class="home">
    <counter />
    <todo />
  </div>
</template>

<script>
import Counter from '@/components/counter'
import Todo from '@/components/todo'
export default {
  name: 'home',
  components: {
    Counter,
    Todo
  }
}
</script>
