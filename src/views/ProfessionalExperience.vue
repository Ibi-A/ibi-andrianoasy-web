<template>
  <div>
    <view-title title="Expérience professionnelle"/>
    <b-card-group deck>
      <professional-experience-card
        v-for="e in professionalExperience"
        :key="e.id"
        :company="e.company"
        :industry="e.industry" 
        :logo-src="e.logoSrc"
        :job-title="e.jobTitle"
        :period="e.period"
        :duration="e.duration"
        :activities="e.activities"
      />
    </b-card-group>
  </div>
</template>

<script>
import ProfessionalExperience from '../data/professionalExperience.json'
import ProfessionalExperienceCard from '../components/ProfessionalExperienceCard.vue'
import ViewTitle from '../components/ViewTitle.vue'

export default {
  components: {
    ProfessionalExperienceCard,
    ViewTitle,
  },
  data() {
    return {
      professionalExperience: ProfessionalExperience.entries
    }
  }
}
</script>
