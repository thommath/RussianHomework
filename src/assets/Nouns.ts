import { Alternative } from "./Alternative";

export const Noun: Alternative = {
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
      text: "Nominative",
      childHeader: "What form?",
      children: [
        {
          text: "Nominative singular",
          result: "Well that is what you start with",
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
      ]
    },
    {
      text: "Accusative",
      childHeader: "What form?",
      children: [
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
        },
      ]
    },

    {
      text: "Genitive",
      childHeader: "What form?",
      children: [
        {
          text: "Genitive Singular",
          childHeader: "What is the gender?",
          children: [
            
            {
              text: "Masculine",
              childHeader: "What is the ending?",
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
          text: "Genitive Plural",
          childHeader: "What is the gender?",
          children: [
            
            {
              text: "Masculine",
              childHeader: "What is the ending?",
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
                {
                  text: "ж, ч, ш, щ",
                  result: "Add eй",
                },
              ]
            },
            {
              text: "Feminine",
              childHeader: "What is the ending?",
              children: [
                {
                  text: "a",
                  hint: "If left with a cluster of three consonants you usually need to insert the vowel o, e or ё (e if the cluster is жк, чк, шк)",
                  result: "Remove a",
                },
                {
                  text: "я",
                  result: "Remove я, add ь",
                },
                {
                  text: "ия",
                  result: "Remove я, add й",
                },
                {
                  text: "ь",
                  result: "Remove ь, add eй",
                },
              ]
            },
            {
              text: "Neuter",
              childHeader: "What is the ending?",
              children: [
                {
                  text: "o",
                  hint: "If left with a cluster of more than one consonant you usually need to insert o or e",
                  result: "Remove o",
                },
                {
                  text: "e",
                  result: "Add й",
                },
                {
                  text: "иe",
                  result: "Remove e, add й",
                },
              ]
            },
          ],
        }
      ]
    },
    

  ]
  };