<script setup>

const props = defineProps({
  title: String,
  image: String,
  availableItems: String,
  cost: Number,
  description: String,
  shoppingCard: Boolean
})


</script>

<template>
    <div class="card border-primary mb-3" style="max-width: 22rem;">
        <div class="card-header">{{title}}
            <div class="card-body text-primary">
                <a href="#">
                    <img :src="image" :alt="title" class="fit-picture">
                </a>
                <p v-if="availableItems" class="card-text">{{availableItems}} tentaciones</p>
                <h6 v-if="cost">$ {{cost}}</h6>
            </div>
            <button v-if="shoppingCard" class="btn btn-primary">Comprar</button>
        </div>
    </div>
</template>



<style scoped>

</style>