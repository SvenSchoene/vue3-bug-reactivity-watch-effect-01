import Vuex from "vuex";
import { createStore, createLogger } from "vuex";

import app from "./app";

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    app,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
