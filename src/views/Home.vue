<template>
  <div class="home">
    <markdownEditor />
  </div>
</template>

<script>
// @ is an alias to /src
import markdownEditor from "@/components/VEditor.vue";

export default {
  name: "home",
  components: {
    markdownEditor
  }
};
</script>
