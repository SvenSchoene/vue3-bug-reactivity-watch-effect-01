<template>
  <p>isWorking: {{ isWorking }}</p>

  <button @click="toggleIsWorking">
    Set `isWorking` to true and change it back after 5 seconds
  </button>

  <button @click="triggerWatchEffect">Trigger WatchEffect</button>
  <!-- <button v-if="watchEffectHandle === null" @click="startWatchEffect">
    Start WatchEffect
  </button>
  <button v-if="watchEffectHandle !== null" @click="stopWatchEffect">
    Stop WatchEffect
  </button> -->
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { startWatchEffect } from "./is-working-watch-effect";

export default {
  name: "App",
  data: () => ({
    watchEffectHandle: null,
  }),
  computed: {
    ...mapState("app", ["isWorking"]),
  },
  methods: {
    ...mapMutations("app", ["setIsWorking"]),
    toggleIsWorking: async function () {
      this.$store.commit("app/setIsWorking", true);

      setTimeout(() => {
        this.$store.commit("app/setIsWorking", false);
      }, 5000);
    },
    triggerWatchEffect: async function () {
      await startWatchEffect(this.$store);
    },
    startWatchEffect: async function () {
      this.watchEffectHandle = await startWatchEffect(this.$store);
    },
    stopWatchEffect: async function () {
      if (this.watchEffectHandle) {
        this.watchEffectHandle();
      }
      this.watchEffectHandle = null;
    },
  },
};
</script>

<style scoped>
</style>
