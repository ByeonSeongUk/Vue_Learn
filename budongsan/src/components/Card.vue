<template>
    <div>
        <img :src="oneroom.image" class="room-img"/>
        <h4 @click="$emit('openModal', oneroom.id)">{{oneroom.title}} 원룸</h4>
        <p>{{oneroom.price}} 원</p>
    </div>
</template>

<script>

export default {
    props: {
        oneroom: Object,
        modal: Boolean
    }

}
</script>

<style>

</style>
