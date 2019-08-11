import { authComputed } from "../vuex/helpers.js";
export default {
  computed: {
    ...authComputed
  },
  methods: {
    logout () {
      this.$store.dispatch("logout");
    }
  }
}