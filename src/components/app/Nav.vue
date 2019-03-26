<template>
  <section class="nav">
    <header class="header">
      <section class="level">
        <nav id="nav" class="left nav-links">
          <router-link class="a" to="/">Home</router-link>
          <router-link class="a" id="log" to="/log">Log</router-link>
        </nav>
        <section class="right theme-controls">
          <ff-counters />
          <aside class="theme-controls">
            <span class="mode theme">
              <span class="p nav-p">Mode</span>
              <ff-button class="small light">
                <label for="mode">
                  <input
                    type="checkbox"
                    id="mode"
                    style="display:none"
                    @click="changeMode"
                  />
                  <span>{{ mode }}</span>
                </label>
              </ff-button>
            </span>
            <span class="text theme">
              <span class="p nav-p">Text</span>
              <ff-button class="small light">
                <label for="text">
                  <input
                    type="checkbox"
                    id="text"
                    style="display:none"
                    @click="changeText"
                  />
                  <span>{{ text }}</span>
                </label>
              </ff-button>
            </span>
          </aside>
        </section>
      </section>
    </header>
  </section>
</template>
<script>
import ffCounters from "@/components/log/Counters";
export default {
  components: { ffCounters },
  data() {
    return {
      style: {
        mode: {
          index: 0,
          text: "dark-theme",
          options: ["dark-theme", "light-theme"]
        },
        text: {
          index: 0,
          text: "sans",
          options: ["sans", "serif"]
        }
      }
    };
  },
  methods: {
    changeMode() {
      const mode = this.change("mode");
      document.body.classList.value = mode;
      return mode;
    },
    changeText() {
      return this.change("text");
    },
    change(style) {
      const _style = this.style[style];
      const options = _style["options"];
      switch (_style["index"]) {
        case 0:
          _style.text = options[1];
          _style.index = 1;
          break;
        case 1:
          _style.text = options[0];
          _style.index = 0;
          break;
        default:
          _style.text = options[0];
      }
      this.renderStyle();
      return _style.text;
    },
    renderStyle() {
      const styles = [this.style.mode.text, this.style.text.text];
      this.$emit("styles", styles);
      return styles;
    }
  },
  computed: {
    text() {
      return this.style.text.text;
    },
    mode() {
      return this.style.mode.text.replace("-theme", "");
    }
  }
};
</script>
<style scoped lang="scss">
.nav {
  margin: 0 auto;
  padding-bottom: $size1;
  margin-bottom: $size4;
  padding: $size1;
  .a {
    display: block;
    text-decoration: none;
    padding: $size4;
    border-radius: 4px;
  }
}

.nav-p {
  &::after {
    content: ":";
  }
  font-size: $size4;
}

@media (min-width: $break2) {
  .nav-links {
    min-width: 200px;
  }

  .theme {
    display: block;
    text-align: right;
  }
}

@media (min-width: $break3) {
  .nav {
    margin-bottom: $size6;
    .a {
      border-radius: 0;
      display: inline-block;
      font-size: $size6;
      padding: 0;

      &:hover {
        background: none;
      }

      &:nth-child(1) {
        margin-right: $size2;
      }
    }
  }

  .header {
    width: 100%;
    padding: $size5;
  }

  .level {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
}

.dark-theme {
  .header {
    background: black;

    .a {
      &:hover {
        background: $orange;
      }
    }
    @media (min-width: $break3) {
      .a {
        &:hover {
          background: none;
          border-bottom: 3px solid $green;
        }
      }
      .right {
        padding-left: $size8;
        border-left: 5px dotted $black;
      }
    }
  }
}

.light-theme {
  .header {
    background: white;

    .a {
      &:hover {
        background: $slate;
      }
    }
    @media (min-width: $break3) {
      .a {
        &:hover {
          background: none;
          border-bottom: 3px solid $slate;
        }
      }
      .right {
        padding-left: $size8;
        border-left: 5px dotted $gray2;
      }
    }
  }
}
</style>
