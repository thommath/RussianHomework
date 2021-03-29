<template>
  <div class="hello">
    <div>

      <h1 v-if="element.childHeader">{{element.childHeader}}</h1>
      <h2 v-if="element.hint">{{element.hint}}</h2>

      <h1 v-if="element.result">{{element.result}}</h1>

      <button class="alternative" v-for="b in element.children" :key="b.text" @click="navigate(b)" >{{b.text}}</button>
    </div>

    <button class="back" @click="reset" v-if="!atTheTop">To the top</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

type Alternative = {
  text: string;
  childHeader?: string;
  children?: Alternative[];
  result?: string;
  hint?: string;
}

const root: Alternative = {
    text: "Noun",
    childHeader: "What do you want to conjugate?",
    children: [
    {
      text: "Find gender",
      childHeader: "What is the ending?",
      children: [
        {
          text: "Consonant",
          result: "Masculine",
        },
        {
          text: "й",
          result: "Masculine",
        },
        {
          text: "ь",
          result: "Masculine",
        },
        {
          text: "a",
          result: "Feminine",
        },
        {
          text: "я",
          result: "Feminine",
        },
        {
          text: "ия",
          result: "Feminine",
        },
        {
          text: "ь",
          result: "Feminine",
        },
        {
          text: "o",
          result: "Neuter",
        },
        {
          text: "e",
          result: "Neuter",
        },
        {
          text: "иe",
          result: "Neuter",
        },
      ],
    },
    {
      text: "Nomiative plural",
      hint: "The stress in some regular nouns change in the nominative plural. This can happen for all genders",
      childHeader: "What is the gender?",
      children: [
        {
          text: "Masculine",
          childHeader: "What is the ending?",
          children: [
            {
              text: "consonant",
              result: "Add ы",
            },
            {
              text: "й",
              result: "Remove й, add и",
            },
            {
              text: "ь",
              result: "Remove ь, add и",
            },
          ]
        },
        {
          text: "Feminine",
          childHeader: "What is the ending?",
          children: [
            {
              text: "a",
              result: "Remove a, add ы",
            },
            {
              text: "я",
              result: "Remove я, add и",
            },
            {
              text: "ь",
              result: "Remove ь, add и",
            },
          ]
        },
        {
          text: "Neuter",
          childHeader: "What is the ending?",
          children: [
            {
              text: "o",
              result: "Remove o, add a",
            },
            {
              text: "e",
              result: "Remove e, add я",
            },
          ]
        },
      ],
    },
    {
      text: "Accusative singular",
      hint: "In the singular masculinne nouns only change in the accusative case if they are animate",
      childHeader: "What is the gender?",
      children: [
        {
          text: "Masculine",
          childHeader: "What is the ending?",
          hint: "In the singular masculinne nouns only change in the accusative case if they are animate",
          children: [
            {
              text: "consonant",
              result: "Add a",
            },
            {
              text: "й",
              result: "Remove й, add я",
            },
            {
              text: "ь",
              result: "Remove ь, add я",
            },
          ]
        },
        {
          text: "Feminine",
          childHeader: "What is the ending?",
          children: [
            {
              text: "a",
              result: "Remove a, add у",
            },
            {
              text: "я",
              result: "Remove я, add ю",
            },
            {
              text: "ь",
              result: "Same same",
            },
          ]
        },
        {
          text: "Neuter",
          result: "They are inanimate and do not change (with some very rare exceptions)"
        },
      ],
    },

    {
      text: "Accusative plural",
      hint: "In the plural inanimate nouns are the same as nominative plural - maybe go there?",
      childHeader: "What is the gender?",
      children: [
        {
          text: "Masculine",
          childHeader: "What is the ending?",
          hint: "In the singular masculinne nouns only change in the accusative case if they are animate",
          children: [
            {
              text: "consonant",
              result: "Add oв",
            },
            {
              text: "й",
              result: "Remove й, add eв",
            },
            {
              text: "ь",
              result: "Remove ь, add eй",
            },
          ]
        },
        {
          text: "Feminine",
          childHeader: "What is the ending?",
          children: [
            {
              text: "a",
              hint: "If left with a cluster of three consonants you usually need to insert the vowel o, e or ё",
              result: "Remove a",
            },
            {
              text: "я",
              result: "Remove я, add ь",
            },
            {
              text: "ь",
              result: "Remove ь, add eй",
            },
          ]
        },
        {
          text: "Neuter",
          result: "They are inanimate and do not change (with some very rare exceptions)"
        },
      ],
    }
  ]
  };

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
