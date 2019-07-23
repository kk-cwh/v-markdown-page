<template>
  <div class="home">
    <div class="top-box">
      <label for="theme-select">code主题：</label>
      <select id="theme-select" name="theme" v-model="theme">
        <option
          :value="item"
          v-for="(item, index) in themeList"
          :key="'item' + index"
          >{{ item }}</option
        >
      </select>
      <button @click="downloadHtml">导出html</button>
    </div>

    <div style="margin:0 10px">
      <VMarkdown
        @md-change="mdChange"
        :mdText="mdDefault"
        height="840px"
        fontSize="16px"
        @html-hljs-change="htmlHljsChange"
        :theme="theme"
      />
    </div>
  </div>
</template>

<script>
import VMarkdown from "@zkhh/v-markdown";

export default {
  name: "home",
  components: { VMarkdown },
  data() {
    return {
      themeList: [
        "solarized-dark",
        "github",
        "monokai-sublime",
        "dracula",
        "rainbow",
        "atom-one-dark",
        "agate",
        "far",
        "solarized-dark"
      ],
      htmlStr: "",
      cssUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/",
      theme: "far",
      mdDefault:
        `
# h1 快捷键 ctrl+1
## h2 快捷键 ctrl+2
### h3 快捷键 ctrl+3
#### h4  快捷键 ctrl+4
##### h5 快捷键 ctrl+5

*斜体* 快捷键 ctrl+I
**粗体** 快捷键 ctrl+B

` +
        "```\n代码块 快捷键 ctrl+K \n```" +
        `
添加链接 [描述](http://example.com)   快捷键 ctrl+L
添加图片链接 ![图片描述](http://example.com/demo.png)   快捷键 ctrl+G

1. 有序列表1
2. 有序列表2
3. 有序列表3

- 无序列表
- 无序列表
- 无序列表

> 引用

emojione表情示例:

:woman: :apple: :dog: :cat: :man: :kiss:


      `
    };
  },
  computed: {
    csslink() {
      return this.cssUrl + this.theme + ".min.css";
    }
  },
  methods: {
    mdChange(value) {
      // console.log(value);
    },
    htmlHljsChange(value) {
      this.htmlStr = value;
    },
    downloadHtml() {
      var filename = "md.html";
      var link = `<link rel="stylesheet"
      href="${this.csslink}">`;
      var htmlStr = this.htmlStr;
      var content = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width,initial-scale=1.0">
              <link rel="icon" href="favicon.ico">
              <title>${filename}</title>
              <style>
              #app{
                  width:800px;
                  height:100%;
                  margin:0 auto;
                  font-size:15px;
              }
              </style>   
              ${link}
            </head>
            <body>
              <div id="app">
                  ${htmlStr}
              </div>
            </body>
          </html>`;

      var eleLink = document.createElement("a");
      eleLink.download = filename;
      eleLink.style.display = "none";
      // 字符内容转变成blob地址
      var blob = new Blob([content]);
      eleLink.href = URL.createObjectURL(blob);
      // 触发点击
      document.body.appendChild(eleLink);
      eleLink.click();
      // 然后移除
      document.body.removeChild(eleLink);
    }
  }
};
</script>

<style lang="less" scoped>
.top-box {
  text-align: right;
  margin: 0 10px;
  button {
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
    outline: 0;
    vertical-align: middle;
    line-height: 1.5;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 5px 15px 6px;
    font-size: 12px;
    border-radius: 4px;
    transition: color 0.2s linear, background-color 0.2s linear,
      border 0.2s linear, box-shadow 0.2s linear;
    margin-left: 5px;
  }
}
</style>
