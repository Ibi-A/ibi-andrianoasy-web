<template>
    <b-card
        :title="type"
        :img-src="logoSrc"
        :sub-title="title"
        :img-alt="school"
        class="mb-3"
        v-b-toggle="'diploma-' + id"
        img-top
    >
        <template #footer>
            <b-icon
                icon="info-circle-fill"
                class="mr-1"
                variant="primary"
            />
            {{ school }} ({{ period }})
        </template>
        <b-card-text>
            <b-collapse :id="'diploma-' + id">
                {{ description }}
            </b-collapse>
            
        </b-card-text>
    </b-card>
</template>

<script lang="ts">

export default {
    props: {
        id: String,
        type: String,
        title: String,
        logoSrc: String,
        school: String,
        period: String,
        description: String,
    }
}
</script>