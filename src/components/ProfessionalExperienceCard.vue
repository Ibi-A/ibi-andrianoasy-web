<template>
    <b-card
        :sub-title="industry"
        :title="jobTitle"
        class="mb-3"
    >
        <template #header>
            <b-avatar 
                class="mr-3" 
                variant="light"
                :src="logoSrc"
                size="3.5em"
            ></b-avatar>
            <span class="mr-2"><b>{{ company }}</b></span>
            <b-badge
                v-if="duration != null" 
                class="mr-1 px-2 py-2"
            >
                {{ duration }}
            </b-badge>
            <b-badge
                v-if="period != null" 
                class="mr-1 px-2 py-2"
            >
                {{ period }}
            </b-badge>
        </template>

        <b-list-group class="mt-4">
            <collapsable-list-group-item
                v-for="a in activities"
                :key="a"
                :title="a.title"
                :description="a.description"
                :parent-id="id"
                :item-id="a.id"
            />
        </b-list-group>
    </b-card>
</template>

<script lang="ts">
import CollapsableListGroupItem from './CollapsableListGroupItem.vue'

export default {
    components: {
        CollapsableListGroupItem
    },
    props: {
        id: String,
        company: String,
        industry: String,
        logoSrc: String,
        jobTitle: String,
        period: String,
        duration: String,
        activities: [],
    }
}
</script>