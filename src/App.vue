<template>
  <div id="app">
      <div id="nav">在线markdown解析器</div>
    <MdEditor/>
  </div>
</template>

<script>
import MdEditor from './components/MdEditor.vue'

export default {
  name: 'app',
  components: {
    MdEditor
  }
}
</script>

 <style lang="less">


#app {
  color: #2c3e50;
  #nav {
    text-align: center;
    margin-top: 10px;
  }
}
</style>
