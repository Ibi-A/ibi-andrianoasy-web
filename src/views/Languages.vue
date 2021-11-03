<template>
  <div>
    <view-title title="Langues"/>
    <b-card-group deck>
      <language-card
        v-for="language in languages"
        :key="language.id"
        :name="language.name"
        :level="language.level"
        :img-src="language.imgSrc"
      />
    </b-card-group>
  </div>
</template>

<script>
import Languages from '../data/languages.json'
import LanguageCard from '../components/LanguageCard.vue'
import ViewTitle from '../components/ViewTitle.vue'

export default {
  components: {
    LanguageCard,
    ViewTitle,
  },
  data() {
    return {
      languages: Languages.entries
    }
  }
}
</script>
