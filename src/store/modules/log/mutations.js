export default {
  save({ state }, data) {
    state.log.push(data);
  },
  archive({ state }, data) {
    state.log.find(e => {
      e.id == data.id ? (e.archived = data.archived) : e.archived;
    });
  },
  pin({ state }, data) {
    state.log.find(e => {
      e.id == data.id ? (e.pinned = data.pinned) : e.pinned;
    });
  }
};
