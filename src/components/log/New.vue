<template>
  <section class="new-log">
    <transition mode="out-in">
      <template v-if="visible">
        <box class="box">
          <header class="header">
            <h1 class="h2">Add New Log</h1>
            <div class="close-btn">
              <ff-button @click="form">close</ff-button>
            </div>
          </header>
          <form @submit.prevent="submit" class="form">
            <input
              type="text"
              id="log-title"
              v-model="log.title"
              @focus="errors = false"
              placeholder="Log Title"
            />
            <transition>
              <template v-if="errors">
                <div class="errors p3">
                  {{ errorMessage["title"] }}
                </div>
              </template>
            </transition>
          </form>

          <textarea
            name="log-body"
            id="log-body"
            cols="30"
            rows="10"
            v-model="log.body"
            placeholder="Log Message"
          ></textarea>

          <ff-button class="success" id="submit-log" @click="submit"
            >Submit Log</ff-button
          >
          <label for="pin">
            <span class="p">
              Pin to top
            </span>
          </label>
          <input id="pin" type="checkbox" @click="pin" v-model="checked" />
        </box>
      </template>
      <template v-else>
        <section class="new-log-btn">
          <ff-button id="new-log-btn" class="large info" @click="form">
            New Log
          </ff-button>
        </section>
      </template>
    </transition>
  </section>
</template>

<script>
import Log from "./model";
export default {
  data() {
    return {
      log: { pinned: false },
      errors: false,
      visible: false,
      checked: false
    };
  },
  methods: {
    pin() {
      this.log.pinned = !this.checked;
    },
    submit() {
      if (this.log.save()) {
        this.errors = false;
        this.visible = false;
        this.newLog();
      } else {
        this.errors = true;
      }
    },
    newLog() {
      this.log = Log.new(this);
    },
    form() {
      this.visible = !this.visible;
      return this.visible;
    }
  },
  computed: {
    errorMessage() {
      return this.log.errors();
    },
    title() {
      return this.log.title;
    },
    body() {
      return this.log.body;
    }
  },
  created() {
    this.newLog();
  }
};
</script>
<style scoped lang="scss">
.dark-theme {
  .box {
    @include border-dark-theme;
  }
}
.new-log-btn {
  text-align: center;
  margin-bottom: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  .h1 {
    padding-top: 10px;
  }
}
.new-log {
  margin-bottom: $size4;
}
</style>
