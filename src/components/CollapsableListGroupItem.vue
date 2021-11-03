<template>
    <b-list-group-item 
        v-b-toggle="'collapse-' + parentId + '-' + itemId"
        button
    >
        <b-icon
            v-if="description != null"
            class="mr-1"
            icon="info-circle-fill"
        />
        {{ title }}
        <b-collapse
            v-if="description != null"
            :id="'collapse-' + parentId + '-' + itemId"
        >
            <b-card class="mt-3 mb-3">
                <b-card-text>
                    <small class="text-muted">{{ description }}</small>
                </b-card-text>
            </b-card>
        </b-collapse>
    </b-list-group-item>
</template>

<script lang="ts">

export default {
    props: {
        parentId: String,
        itemId: String,
        title: String,
        description: String,
    }
}
</script>