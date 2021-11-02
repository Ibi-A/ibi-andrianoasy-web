<template>
  <div>
    <b-container>
      <b-row align-v="center" align-h="center">
        <b-col xl="3"><b-img :src="aboutMe.profilePictureUrl" rounded="circle" fluid-grow/></b-col>
        <b-col>
          <b-jumbotron :header="aboutMe.name" :lead="aboutMe.title">
            <hr/>
            <p>{{ aboutMe.description }}</p>
          </b-jumbotron>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="contactInfo in contact" :key="contactInfo.id" xl="4">
          <contact-card :name="contactInfo.name" :value="contactInfo.value" :is-link="contactInfo.isLink"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AboutMe from '../data/aboutMe.json'
import Contact from '../data/contact.json'
import ContactCard from '../components/ContactCard.vue'

export default {
  components: {
    ContactCard,
  },
  data() {
    return {
      aboutMe: AboutMe,
      contact: Contact.entries
    }
  }
}
</script>
