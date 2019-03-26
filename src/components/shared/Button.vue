<template>
  <button class="button" @click="click">
    <span class="p">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  background: $info;
  color: $white;
  padding: $size6;
  margin: $size8 auto;
  border-radius: 4px;
  display: inline-block;
  box-sizing: border-box;
  min-width: 30px;
  &:hover {
    background: darken($info, 10%);
  }
}

.small {
  padding: $size2 $size3;
  margin: $size2;
}

.large {
  padding-left: $size10;
  padding-right: $size10;
  min-width: 120px;
  .p {
    font-size: $size6;
  }
}

.light-theme {
  .button {
    background: $white;
    border: 1px solid $slate;
    color: $black;
    &:hover {
      background: lighten($info, 30%);
      border: 1px solid $info;
    }
  }
  .warn {
    &:hover {
      background: lighten($red, 30%);
      border: 1px solid $red;
    }
  }
  .success {
    &:hover {
      background: lighten($green, 30%);
    }
  }
}

.dark-theme {
  .button {
    background: $orange;
    color: $white;
    &:hover {
      background: lighten($orange, 10%);
      .p {
        color: $black;
      }
    }
  }

  .warn {
    &:hover {
      background: $pink;
      .p {
        color: $red;
      }
    }
  }

  .info {
    background: $black;
    border: 1px solid $slate;
    color: $slate;
    &:hover {
      background: lighten($green, 10%);
      border: 1px solid $black;
    }
  }
  .success {
    background: $green;
    color: $white;
    &:hover {
      background: lighten($green, 10%);
    }
  }
}
</style>
