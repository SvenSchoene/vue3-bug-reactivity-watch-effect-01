import { watch } from "vue";

export function startWatch(store) {
  let stopWatchEffect;
  stopWatchEffect = watch(
    () => [store.state.app.isWorking],
    () => {
      if (store.state.app.isWorking) {
        console.log(
          "[is-working-watch-effect@startWatch@watchEffect][1]",
          "Is currently working"
        );
        return;
      }

      if (stopWatchEffect) {
        stopWatchEffect();
      }

      console.log(
        "[is-working-watch-effect@startWatch][2]",
        "Is not working anymore"
      );
    },
    { immediate: true }
  );

  return stopWatchEffect;
}
