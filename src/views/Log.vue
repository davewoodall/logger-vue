<template>
  <div class="log">
    <new-log />
    <log-index />
  </div>
</template>

<script>
import LogIndex from "@/components/log/Index";
import NewLog from "@/components/log/New";
export default {
  components: {
    LogIndex,
    NewLog
  }
};
</script>

<style scoped lang="scss">
.log {
  height: inherit;
}

.dark-theme {
  .log {
    @include background-dark-theme;
  }
}
.light-theme {
  .log {
    @include background-light-theme2;
    background: $gray;
  }
}
</style>
