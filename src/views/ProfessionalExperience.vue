<template>
  <div>
    <h1>Expérience professionnelle</h1>
    <hr/>
    <b-card-group deck>
      <professional-experience-card v-for="e in professionalExperience" :key="e.id" :company="e.company" :industry="e.industry" :logo-src="e.logoSrc" :job-title="e.jobTitle" :period="e.period" :duration="e.duration" :activities="e.activities"/>
    </b-card-group>
  </div>
</template>

<script>
import ProfessionalExperience from '../data/professionalExperience.json'
import ProfessionalExperienceCard from '../components/ProfessionalExperienceCard.vue'

export default {
  components: {
    ProfessionalExperienceCard,
  },
  data() {
    return {
      professionalExperience: ProfessionalExperience.entries
    }
  }
}
</script>
