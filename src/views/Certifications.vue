<template>
  <div>
    <view-title title="Certifications"/>
    <b-card-group deck>
      <diploma-card 
        v-for="certification in certifications" 
        :key="certification.id"
        :id="certification.id" 
        :type="certification.type" 
        :title="certification.title" 
        :logo-src="certification.logoSrc" 
        :school="certification.school" 
        :period="certification.period" 
        :description="certification.description"
      />
    </b-card-group>
  </div>
</template>

<script>
import Certifications from '../data/certifications.json'
import DiplomaCard from '../components/DiplomaCard.vue'
import ViewTitle from '../components/ViewTitle.vue'

export default {
  components: {
    DiplomaCard,
    ViewTitle,
  },
  data() {
    return {
      certifications: Certifications.entries
    }
  }
}
</script>
