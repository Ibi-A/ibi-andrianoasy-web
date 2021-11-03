<template>
  <div>
    <h1>Certifications</h1>
    <hr/>
    <b-card-group deck>
      <diploma-card 
        v-for="certification in certifications" 
        :key="certification.id" 
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

export default {
  components: {
    DiplomaCard,
  },
  data() {
    return {
      certifications: Certifications.entries
    }
  }
}
</script>
