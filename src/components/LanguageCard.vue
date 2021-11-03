<template>
    <b-card
        :title="name"
        :img-src="imgSrc"
        :sub-title="level"
        :img-alt="name"
        class="mb-3"
        img-top
    >
    </b-card>
</template>

<script lang="ts">

export default {
    props: {
        name: String,
        level: String,
        imgSrc: String,
    }
}
</script>