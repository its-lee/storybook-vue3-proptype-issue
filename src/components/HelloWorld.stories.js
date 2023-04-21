import HelloWorld from "./HelloWorld.vue";

export default { component: HelloWorld };

export const base = {
  args: {
    msg: "Hi there",
  },
};
