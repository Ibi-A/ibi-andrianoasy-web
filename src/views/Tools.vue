<template>
  <div>
    <view-title title="Outils"/>
    <b-card-group deck>
      <tool-card
        v-for="tool in tools"
        :key="tool"
        :title="tool.title"
        :tools="tool.tools"
        :id="tool.id"
      />
    </b-card-group>
  </div>
</template>

<script>
import Tools from '../data/tools.json'
import ToolCard from '../components/ToolCard.vue'
import ViewTitle from '../components/ViewTitle.vue'

export default {
  components: {
    ToolCard,
    ViewTitle,
  },
  data() {
    return {
      tools: Tools.entries
    }
  }
}
</script>
