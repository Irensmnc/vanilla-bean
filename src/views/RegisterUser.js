export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: null
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch(err => {
          this.errors = err.response.data.errors;
        });
    }
  }
}