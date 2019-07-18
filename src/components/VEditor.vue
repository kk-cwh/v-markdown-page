<template>
  <div class="v-editor">
    <div class="editor-flex">
      <div class="editor-content">
        <textarea class="markdown-area" v-model="mdString" />
      </div>
      <div class="editor-preview" v-html="htmlString"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import "highlight.js/styles/far.css";
import hljs from "highlight.js";
export default {
  name: "VEditor",
  props: {
    mdTxt: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      mdString: "",
      htmlString: ""
    };
  },
  watch: {
    mdString(value) {
      marked.setOptions({
        // renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function(code) {
          return hljs.highlightAuto(code).value;
        }
      });
      this.htmlString = marked(value);
      this.$nextTick().then(function() {
        document.querySelectorAll(".editor-preview pre code").forEach(block => {
          hljs.highlightBlock(block);
        });
      });
    }
  },
  mounted() {
    this.mdString = this.mdTxt;
  },
  methohs: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.v-editor {
  width: 100%;
  height: 800px;
  margin: 0 auto;
  .editor-flex {
    width: 100%;
    height: 100%;
    text-align: left;
    display: flex;
    .editor-content {
      flex: 1;
      background-color: #f8f8f9;
      border: 1px solid #dcdee2;
      border-left: none;
      .markdown-area {
        width: 100%;
        height: 100%;
        padding: 15px;
        overflow: auto;
        box-sizing: border-box;
        resize: none;
        outline: none;
        border: none;
        background-color: transparent;
        font-size: 14px;
        color: #232323;
        line-height: 24px;
      }
    }
    .editor-preview {
      flex: 1;
      border: 1px solid #dcdee2;
      border-right: none;
      padding: 15px;
      overflow: auto;
      word-wrap: break-word;
    }
  }
}
</style>
