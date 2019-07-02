<template>
  <div class="home">
    <counter />
    <todo />
    <topics />
  </div>
</template>

<script>
import Counter from '@/components/counter'
import Todo from '@/components/todo'
import Topics from '@/components/topics'
export default {
  name: 'home',
  components: {
    Counter,
    Todo,
    Topics
  }
}
</script>
