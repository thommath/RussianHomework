import { Alternative } from "./Alternative";

const adjectiveTypeHint = "Soft has the ending ний in nominative singular masculine and an н after the stem in any form. \nStessed has stress on the ending, unstressed has not.";

export const Adjective: Alternative = {
    text: "Adjective",
    childHeader: "What form has the verb?",
    children: [
      {
        text: "Nominative",
        childHeader: "What form?",
        children: [
          {
            text: "Nominative singular",
            childHeader: "What is the gender?",
            children: [
              {
                text: "Masculine",
                childHeader: "What type of adjective is it?",
                hint: adjectiveTypeHint,
                children: [
                  {
                    text: "Unstressed",
                    result: "Ends in ий",
                  },
                  {
                    text: "Stressed",
                    result: "Stressed ends in oй"
                  },
                  {
                    text: "Soft",
                    result: "Soft ends in ний"
                  }
                ]
              },
              {
                text: "Feminine",
                childHeader: "What type of adjective is it?",
                hint: adjectiveTypeHint,
                children: [
                  {
                    text: "Unstressed or stressed",
                    result: "Ends in aя, only stress is different",
                  },
                  {
                    text: "Soft",
                    result: "Soft ends in няя"
                  }
                ]
              },
              {
                text: "Neuter",
                childHeader: "What type of adjective is it?",
                hint: adjectiveTypeHint,
                children: [
                  {
                    text: "Unstressed or stressed",
                    result: "Ends in oe, only stress is different",
                  },
                  {
                    text: "Soft",
                    result: "Soft ends in нee"
                  }
                ]
              },
            ],
          },
          {
            text: "Nomiative plural",
            childHeader: "What type of adjective is it?",
            hint: adjectiveTypeHint,
            children: [
              {
                text: "Unstressed or stressed",
                hint: "If the stem ends in г, к, х, ж, ч, ш or щ the ending must be иe",
                result: "Ends in ыe",
              },
              {
                text: "Soft",
                result: "Soft ends in ниe"
              }
            ]
          }
        ]
      },
    ]
  };