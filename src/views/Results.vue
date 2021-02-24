<template>
  <div class="results">
    <!-- 
      truncate description
      1. create function, then check if description prints to console - done
      2. create logic to check if description length is greater than a certain length. if larger than certain length, shorten description - done
      3. else return description in full - done
      
      toggle truncated description with button
      1. add button - done
      2. toggle button to show/hide the rest of the truncated description - done
      3. change button text to show Read More or Read Less - done
      4. conditionally render Read More button if description more than 2500 character - done
      5. add/remove "..." when add description length is greater than a certain amount of characters - done
      6. have button render when description is greater than a certain length, if a short description hide read more button - done
     -->
    <div class="results__container">
      <div class="results__sidebar">
        <Title msg="You Are..." />
        <h2 class="results--title"> 
          {{ name }}
        </h2>
        <img class="results--image" :src="imageUrl" :alt="name">
      </div>
      <div class="results__content">
        <p class="results--description">
          {{ getTruncatedCharacterDescription }}
          <span v-if="!isFullDescription" class="results--ellipsis">....</span>
        </p>
        <p v-if="isFullDescription" class="results--description results--readMore">
          {{ getFullCharacterDescription }}
        </p>
        <div class="results--toggle-text-button-container">
          <Button v-if="showReadMoreButton" class="results__toggle-text-button" :text="updateReadMoreButtonText" @click="toggleDescriptionLength" />
        </div>
      </div>
    </div>
    <div class="results__footer">
      <Button class="results__button" text="Go Again!" @click="goToHomePage" />
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Button from '@/components/Button';
import { mapGetters } from 'vuex';
export default {
  name:'results-page',
  components: {
    Title,
    Button,
  },
  data() {
    return {
      name: '',
      description: '',
      imageUrl: '',
      isFullDescription: false,
    };
  },
  computed: {
    ...mapGetters('quiz', [
      'totalScore',
    ]),
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
    getTruncatedCharacterDescription(){
      if(this.description.length > 2500) {
        return `${this.description.slice(0, 2346)}`;
      }
      return this.description;
    },
    showReadMoreButton() {
      return this.description.length > 2500;
    },
    getFullCharacterDescription(){
      return `${this.description.slice(2346, this.description.length)}`;
    },
    updateReadMoreButtonText() {
      let toggle = this.isFullDescription;
      console.log('test', toggle = !toggle);
      return (toggle = !toggle) && this.description.length > 2500  ? 'Read Less' : 'Read More';
    },
  },
  methods: {
    goToHomePage(){
      return this.$router.push('/');
    },
    toggleDescriptionLength(){
      this.isFullDescription = !this.isFullDescription;
    },
  },
  created() {
    console.log('resultsPage2', this.characterName);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    // https://stackoverflow.com/questions/44977953/alternative-to-multiple-if-else-statements-in-javascript/44978021
    // https://www.javascripttutorial.net/es6/javascript-map/
    // https://javascript.info/map-set 

    const url = 'https://api.jikan.moe/v3/character/';

    const characterIdMap = new Map ([
      ['sailor-moon', '2030'],
      ['spike-spiegel', '1'],
      ['goku', '246'],
      ['monkey-d-luffy', '40'],
      ['michiko', '15889'],
      ['light-yagami', '80'],
    ]);

    const characterId = characterIdMap.get(this.characterName);

    fetch(`${url}${characterId}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.name = result.name;
        this.description = result.about.replace(/\\n/g, '');
        this.imageUrl = result.image_url;
      })
      .catch(error => console.log('error', error));
  },
};
</script>
