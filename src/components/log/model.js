export default class Log {
  constructor(env, log = {}) {
    this.title = log.title || "";
    this.body = log.body || "";
    this.pinned = false;
    this.store = env.$store;
    this.archived = false;
    this.createdAt = Date.now();
    this.id = log.id || this.makeId();
  }

  static new(env, title, body) {
    return new Log(env, title, body);
  }

  static pin(env, id) {
    let entry = this.find(env, id);
    entry.pinned = !entry.pinned;
    env.$store.dispatch("Log/pin", entry);
    return entry.pinned;
  }

  static all(env) {
    return this.logIndex(env.$store)
      .map(log => {
        if (log.archived === false) {
          return log;
        } else {
          return null;
        }
      })
      .filter(log => log !== null);
  }

  static find({ $store }, id) {
    return this.logIndex($store).find(entry => {
      if (entry.id === id) {
        return entry;
      }
    });
  }

  static search({ $store }, title) {
    return this.logIndex($store).filter(entry => {
      if (entry.title.toLowerCase().includes(title.toLowerCase())) {
        return entry;
      }
    });
  }

  static destroy(env, id) {
    let entry = this.find(env, id);
    entry.pinned = false;
    entry.archived = true;
    env.$store.dispatch("Log/archive", entry);
    return this.archived;
  }

  static logIndex(store) {
    return store.getters["Log/all"];
  }

  static partition(env) {
    let pinned = [];
    let rest = [];
    this.all(env).forEach(entry => {
      entry.pinned ? pinned.push(entry) : rest.push(entry);
    });
    return [pinned, rest];
  }

  static count(env, item) {
    let deleted;
    switch (item) {
      case "log":
        return this.partition(env)[1].length;
      case "pinned":
        return this.partition(env)[0].length;
      case "deleted":
        deleted = this.logIndex(env.$store).length - this.all(env).length;
        return deleted;
      default:
        return this.all(env);
    }
  }

  makeId() {
    return Date.now()
      .toString()
      .substring(9);
  }

  data() {
    return {
      id: this.id,
      title: this.title,
      body: this.body,
      pinned: this.pinned,
      archived: this.archived,
      createdAt: this.createdAt
    };
  }

  valid() {
    if (_.hasText(this.title)) {
      return true;
    } else {
      return false;
    }
  }

  saveModel() {
    this.store.dispatch("Log/save", this);
  }

  save() {
    if (this.valid()) {
      this.saveModel();
      return this;
    } else {
      return false;
    }
  }

  errors() {
    if (this.valid()) {
      return "";
    } else {
      return {
        title: "please add title"
      };
    }
  }
}

const _ = {
  hasText(title) {
    if (!title || !title.trim() || title.length === 0) {
      return false;
    } else {
      return true;
    }
  }
};
