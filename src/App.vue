<template>
  <p>isWorking: {{ isWorking }}</p>

  <button @click="toggleIsWorking">
    Set `isWorking` to true and change it back after 5 seconds
  </button>

  <button @click="triggerWatch">Trigger Watch</button>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { startWatch } from "./is-working-watch";

export default {
  name: "App",
  data: () => ({}),
  computed: {
    ...mapState("app", ["isWorking"]),
  },
  methods: {
    ...mapMutations("app", ["setIsWorking"]),
    toggleIsWorking: async function () {
      this.setIsWorking(true);

      setTimeout(() => {
        this.setIsWorking(false);
      }, 5000);
    },
    triggerWatch: function () {
      startWatch(this.$store);
    },
  },
};
</script>

<style scoped>
</style>
