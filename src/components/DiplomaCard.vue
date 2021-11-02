<template>
    <b-card
        :title="type"
        :img-src="pictureUrl"
        :sub-title="title"
        :img-alt="school"
        img-top
        border-variant="light"
        class="mb-3"
    >
        <template #footer>
            {{ school }} ({{ year }})
        </template>
    </b-card>
</template>

<script lang="ts">

export default {
    props: {
        type: String,
        title: String,
        pictureUrl: String,
        school: String,
        year: String,
    }
}
</script>