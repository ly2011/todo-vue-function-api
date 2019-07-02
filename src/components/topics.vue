<template>
  <div class="topics">
    <template v-if="isLoading">Loading...</template>
    <template v-else>
      <div v-for="(item, index) in topics" :key="item.id || index">
        <h3>{{item.title}}</h3>
      </div>
    </template>
    <div>Mouse is at {{x}}, {{y}}</div>
  </div>
</template>

<script>
import { value, onMounted, onUnmounted } from 'vue-function-api'
import { getTopics } from '@/api/common.js'

function useFetch (props) {
  const isLoading = value(true)
  const topics = value([])

  onMounted(async () => {
    isLoading.value = true
    const { data = [] } = await getTopics()
    topics.value = data
    isLoading.value = false
  })

  return {
    isLoading,
    topics
  }
}

function useMouse () {
  const x = value(0)
  const y = value(0)
  const update = e => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return {
    x,
    y
  }
}
export default {
  setup () {
    return {
      ...useFetch(),
      ...useMouse()
    }
  }
}
</script>
