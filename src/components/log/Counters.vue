<template>
  <section class="log-counters">
    <div class="counter">
      <div class="number p">
        {{ logged }}
      </div>
      <div class="title p2">
        Logged
      </div>
    </div>
    <div class="counter">
      <div class="number p">
        {{ pinned }}
      </div>
      <div class="title p2">
        Pinned
      </div>
    </div>
    <div class="counter">
      <div class="number p">
        {{ deleted }}
      </div>
      <div class="title p2">
        Deleted
      </div>
    </div>
  </section>
</template>
<script>
import Log from "@/components/log/model";
export default {
  computed: {
    logged() {
      return Log.count(this, "log");
    },
    pinned() {
      return Log.count(this, "pinned");
    },
    deleted() {
      return Log.count(this, "deleted");
    }
  }
};
</script>
<style scoped lang="scss">
.log-counters {
  display: flex;
  margin-bottom: $size8;
  margin-top: $size4;
}
.counter {
  flex-grow: 1;
}
.number {
  text-align: center;
  padding-top: $size2;
  padding-bottom: $size2;
  font-size: $size5;
}
.title.p2 {
  text-align: center;
  padding: $size2;
}

@media (min-width: $break2) {
  .log-counters {
    margin-top: 0;
  }
}

.dark-theme {
  .counter {
    border: 1px solid $white;
  }
  .title.p2 {
    background: $white;
    color: $black !important;
  }
}

.light-theme {
  .counter {
    border: 1px solid $gray2;
  }
  .title.p2 {
    background: $gray2;
    color: $black !important;
  }
}
</style>
