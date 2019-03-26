<template>
  <div class="hello">
    <h1 class="h1">
      A collection of odds and ends
    </h1>
    <p>Features</p>
    <ul>
      <li>new message</li>
      <li>Vue router</li>
      <li>Vue x for state</li>
      <li>Responsive views</li>
      <li><a href="">view repo</a></li>
      <li><a href="">view readme</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss"></style>
