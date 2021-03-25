<template>
  <div class="hello">
    <button @click="reset">To the top</button>

    <h1 v-if="element.childHeader">{{element.childHeader}}</h1>
    <h2 v-if="element.hint">{{element.hint}}</h2>

    <h1 v-if="element.result">{{element.result}}</h1>

    <button v-for="b in element.children" :key="b.text" @click="navigate(b)" >{{b.text}}</button>

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
    text: "Root",
    childHeader: "What do you want to conjugate?",
    children: [
    {
      text: "Noun",
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
            {
              text: "иe",
              result: "It's already perfect",
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

button {
  padding: 0.3em;
  margin: 0.3em;
  cursor: pointer;
}
</style>
