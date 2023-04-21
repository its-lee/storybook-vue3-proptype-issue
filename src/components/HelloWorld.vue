<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from "vue";

export type Colour = "red" | "blue" | "green";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
    },
    colour: {
      type: String as PropType<Colour>,
      default: "red",
    },
  },
  setup() {
    const count = ref<number>(0);

    return { count };
  },
});
</script>

<style scoped>
.colour-red {
  color: red;
}

.colour-blue {
  color: blue;
}

.colour-green {
  color: green;
}
</style>
