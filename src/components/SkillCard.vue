<template>
    <b-card
        :title="title"
        class="mb-3"
    >
        <b-list-group>
            <collapsable-list-group-item
                v-for="skill in skills"
                :key="skill"
                :title="skill.title"
                :description="skill.description"
                :parent-id="id"
                :item-id="skill.id"
            />
        </b-list-group>
    </b-card>
</template>

<script lang="ts">
import CollapsableListGroupItem from './CollapsableListGroupItem.vue'

export default {
    components: {
        CollapsableListGroupItem,
    },
    props: {
        id: String,
        title: String,
        skills: [],
    }
}
</script>