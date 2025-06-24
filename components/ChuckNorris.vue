<template>
  <div>
    <button @click="fetchJoke">Get Chuck Norris Joke</button>
    <p v-if="loading">...</p>
    <p class="text-xl px-5" v-else-if="joke">{{ joke }}</p>
    <p v-else></p>
  </div>
</template>

<style scoped src="./components.css" />

<script setup>
import { ref } from "vue";

const joke = ref("");
const loading = ref(false);

async function fetchJoke() {
  loading.value = true;
  joke.value = "";
  try {
    const res = await fetch(
      "https://api.chucknorris.io/jokes/random?category=dev",
    );
    const data = await res.json();
    joke.value = data.value;
  } catch (e) {
    joke.value = "Failed to fetch joke.";
  } finally {
    loading.value = false;
  }
}
</script>
