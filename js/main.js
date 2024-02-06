// recover of createApp method
const { createApp } = Vue;

// app creation
const app = createApp({
  data() {
    return {
      mails: [],
    };
  },

  methods: {
    requestMail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((res) => {
            this.mails.push(res.data.response);
          });
      }
    },
  },

  created() {
    this.requestMail();
  },
});

// running the app
app.mount("#app");
