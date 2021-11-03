<template>
  <div>
    <view-title title="Diplômes"/>
    <b-card-group deck>
      <diploma-card
        v-for="diploma in diplomas"
        :key="diploma.id"
        :id="diploma.id"
        :type="diploma.type"
        :title="diploma.title"
        :logo-src="diploma.logoSrc" 
        :school="diploma.school" 
        :period="diploma.period" 
        :description="diploma.description"
      />
    </b-card-group>
  </div>
</template>

<script>
import Diplomas from '../data/diplomas.json'
import DiplomaCard from '../components/DiplomaCard.vue'
import ViewTitle from '../components/ViewTitle.vue'

export default {
  components: {
    DiplomaCard,
    ViewTitle,
  },
  data() {
    return {
      diplomas: Diplomas.entries
    }
  }
}
</script>
