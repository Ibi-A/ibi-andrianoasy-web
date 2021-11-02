<template>
    <b-card
        :sub-title="industry"
        :title="jobTitle"
        class="mb-3"
    >
        <template #header>
            <b-list-group horizontal>
                <b-avatar class="mr-3" variant="light" :src="logoSrc" size="3em"></b-avatar>
                <b-list-group-item>{{ company }}</b-list-group-item>
                <b-list-group-item v-if="duration != null">{{ duration }}</b-list-group-item>
                <b-list-group-item v-if="period != null">{{ period }}</b-list-group-item>
            </b-list-group>
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