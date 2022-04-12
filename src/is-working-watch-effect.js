import { watchEffect } from "vue";

export function startWatchEffect(store) {
  let stopWatchEffect;
  stopWatchEffect = watchEffect(() => {
    if (store.state.app.isWorking) {
      console.log(
        "[is-working-watch-effect@startWatchEffect@watchEffect][1]",
        "Is currently working"
      );
      return;
    }

    if (stopWatchEffect) {
      stopWatchEffect();
    }

    console.log(
      "[is-working-watch-effect@startWatchEffect][2]",
      "Is not working anymore"
    );
  });

  return stopWatchEffect;
}
