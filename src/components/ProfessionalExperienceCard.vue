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

        <template #title>
            Test
        </template>

        <b-list-group>
            <b-list-group-item v-for="activity in activities" :key="activity">
                {{ activity }}
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script lang="ts">

export default {
    props: {
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