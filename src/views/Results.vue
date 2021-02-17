<template>
  <div class="results">
    <Title msg="You Are..." />
    <h2 class="results--title"> 
      {{ name }}
    </h2>
    <div class="results__container">
      <img class="results--image" :src="imageUrl" :alt="name">
      <p class="results--description">
        {{ description }}
      </p>
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
          //remove '-' in slug 
        }
      });
      //returns the name of the character with the highest score
      return highestScoreName;
    },
  },
  methods: {
    goToHomePage(){
      return this.$router.push('/');
    },
  },
  created() {
    console.log('resultsPage2', this.characterName);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    
    const url = 'https://api.jikan.moe/v3/character/';
    // let characterId;

    // if(this.characterName === 'sailor-moon') {
    //   characterId = '2030';
    // } else if(this.characterName === 'spike-spiegel') {
    //   characterId = '1';
    // } else if(this.characterName === 'goku') {
    //   characterId = '246';
    // } else if(this.characterName === 'monkey-d-luffy') {
    //   characterId = '40';
    // } else if (this.characterName === 'michiko'){
    //   characterId = '15889';
    // } else {
    //   characterId = '80';
    // }
    // console.log(this.characterName);

    // https://stackoverflow.com/questions/44977953/alternative-to-multiple-if-else-statements-in-javascript/44978021
    // use an object as a map
    // const getCharacterId = (name) => {
    //   const characterIdMap = {
    //     'sailor-moon': '2030',
    //     'spike-spiegel': '1',
    //     'goku': '246',
    //     'monkey-d-luffy': '40',
    //     'michiko': '15889',
    //   };
    //   const wildCardCharacterId = '80';
    //   return characterIdMap[name] || wildCardCharacterId;
    // };
    // const characterId = getCharacterId(this.characterName);

    //https://www.javascripttutorial.net/es6/javascript-map/
    //https://javascript.info/map-set 

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
        console.log(result);
        this.name = result.name;
        this.description = result.about.replace(/\\n/g, '');
        // console.log(this.description.length);
        this.imageUrl = result.image_url;
      })
      .catch(error => console.log('error', error));
  },
};
</script>
