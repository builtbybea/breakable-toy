<template>
  <div class="results">
    <Title msg="You Are..." />
    <h3>{{ characterName }}</h3>
    <pre>{{ totalScore }}</pre>
  </div>
</template>

<script>
import Title from '@/components/Title';
import { mapGetters } from 'vuex';
export default {
  name:'results-page',
  components: {
    Title,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters('quiz', [
      'totalScore',
    ]),
    // reference for .reduce() answer https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object
    // characterNameLoop() {
    //   const testArray = ['Helen', 'Florence', 'Perpetua'];
    //   for(let index = 0; testArray.length > index; index++){
    //     console.log(index, testArray[index]);
    //   }
    //   testArray.forEach((value, index) => {
    //     console.log(value, index);
    //   });
    //   return 'test';
    // },
    characterName(){
      //created a variable that stores an array of keys which are the character names
      const characterNames = Object.keys(this.totalScore);
      //created a variable that stores the first value from the array characterNames
      let highestScoreName = characterNames[0];
      //loop through characterName array, which runs a function that passes a parameter called key(key is a string)
      characterNames.forEach((key) => {
        //TODO: Add randomizer when tie-break
        //checks if the score of the key(or character) is higher than the current high score
        if(this.totalScore[key] > this.totalScore[highestScoreName]) {
          //set the highestScoreName to be the new key (or string)
          highestScoreName = key;
        }
      });
      //returns the name of the character with the highest score
      return highestScoreName;
    },
  },
};
</script>
