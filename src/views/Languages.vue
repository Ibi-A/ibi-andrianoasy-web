<template>
  <div>
    <h1>Langues</h1>
    <hr/>
    <b-card-group deck>
      <language-card v-for="language in languages" :key="language.id" :name="language.name" :level="language.level" :img-src="language.imgSrc"/>
    </b-card-group>
  </div>
</template>

<script>
import Languages from '../data/languages.json'
import LanguageCard from '../components/LanguageCard.vue'

export default {
  components: {
    LanguageCard,
  },
  data() {
    return {
      languages: Languages.entries
    }
  }
}
</script>
