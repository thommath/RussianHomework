<template>
  <div class="hello">
    <div>

      <h1 v-if="element.childHeader">{{element.childHeader}}</h1>
      <h2 v-if="element.hint">{{element.hint}}</h2>

      <h1 v-if="element.result">{{element.result}}</h1>

      <button class="alternative" v-for="b in element.children" :key="b.text" @click="navigate(b)" >{{b.text}}</button>
    </div>

    <button class="back" @click="reset" v-if="!atTheTop">To the top</button>

    <div style="text-align: left;border: 1px solid black;" v-html="getHtmlTableForChildren(curElem)">
    </div>
  </div>
</template>

<script lang="ts">
import { Alternative } from "@/assets/Alternative";
import { Options, Vue } from "vue-class-component";
import { Noun } from "../assets/Nouns";

const root: Alternative = Noun;

@Options({
})
export default class HelloWorld extends Vue {

  curElem: Alternative = root;

  get atTheTop(){
    return this.element.text == root.text;
  }

  get element() {
    return this.curElem;
  }

  reset() {
    this.curElem = root;
  }
  navigate(b: Alternative) {
    this.curElem = b;
  }

  getHtmlTableForChildren(element: Alternative, h = 1): string {
    if (element.children) {
      return element.text +  element.children.map(e => this.getHtmlTableForChildren(e, h+1))
        .map((s, i) => `<div style="margin-left: ${h*50}px; margin-top: ${3}px;">${s}</div>`).join("");
    }
    return element.text + " -> " + element.result;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  max-width: 1200px;
  margin: auto auto;
}

button.alternative {
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1.2em;
  cursor: pointer;
  background-color: whitesmoke;
  border-radius: 1em;
}


button.back {
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1em;
  cursor: pointer;
  background-color: whitesmoke;
  border-radius: 1em;
  float: right;
}
</style>

<style>
.inline {
    display: inline-block;
    margin: 0.2em;
}
</style>