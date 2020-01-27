export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch(err => {
          this.error = err.response.data.error;
        });
    }
  }
};
