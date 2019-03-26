<template>
  <div class="box">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 95vw;
  margin: 0 auto;
  margin-bottom: $size2;
  padding: $size2;
}

.dark-theme {
  .box {
    @include dark-theme-background;
  }
}

.light-theme {
  .box {
    @include background-light-theme;
  }
}

@media (min-width: $break1) {
  .box {
    border-radius: 3px;
    padding: $size4;
    margin-bottom: $size6;
  }
}

@media (min-width: $break2) {
  .box {
    padding: $size5;
    width: 92vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: $size8;
  }
}

@media (min-width: $break3) {
  .box {
    max-width: $max-width3;
  }
  .light-theme {
    .box {
      box-shadow: 1px 2px 1px 1px $gray2;
    }
  }
  .dark-theme {
    .box {
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
  }
}
</style>
