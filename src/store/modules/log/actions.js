export default {
  save({ commit }, log) {
    commit("save", log.data());
  },
  archive({ commit }, entry) {
    commit("archive", entry);
  },
  pin({ commit }, entry) {
    commit("pin", entry);
  }
};
