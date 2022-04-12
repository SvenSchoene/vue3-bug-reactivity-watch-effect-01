<template>
  <p>isWorking: {{ isWorking }}</p>

  <button @click="toggleIsWorking">
    Set `isWorking` to true and change it back after 5 seconds
  </button>

  <button @click="triggerWatchEffect">Trigger WatchEffect</button>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { startWatchEffect } from "./is-working-watch-effect";

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
    triggerWatchEffect: function () {
      startWatchEffect(this.$store);
    },
  },
};
</script>

<style scoped>
</style>
