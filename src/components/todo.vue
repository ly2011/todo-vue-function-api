<template>
  <div class="todo">
    <div class="form-group">
      <input type="text" v-model="todo" class="form-control">
      <button class="btn" @click="add">Add</button>
    </div>
    <div class="list-group">
      <div class="list-group-item" v-for="item in items" :key="item">
        <span>{{item}}</span>
        <button class="close" @click="remove(item)"><span>&times;</span></button>
      </div>
    </div>
  </div>
</template>

<script>
import { value } from 'vue-function-api'
export default {
  setup () {
    const todo = value('')
    const items = value(['Vue', 'is', 'MVVM'])

    const add = () => {
      const hasExist = items.value.includes(todo.value)
      if (hasExist) return alert('已存在相同的值了')
      if (todo.value && !hasExist) {
        items.value.push(todo.value)
        todo.value = ''
      }
    }
    const remove = (item) => {
      items.value = items.value.filter(v => v !== item)
    }

    return {
      todo,
      items,
      add,
      remove
    }
  }
}
</script>

<style lang="scss" scoped>
.todo {
  max-width: 360px;
}
.form-group {
  display: flex;
}
.form-control {
    display: block;
    width: 100%;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn {
  color: #fff;
    background-color: #007bff;
  display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.list-group {
  display: flex;
  flex-direction: column;
}
.list-group-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
}
</style>
