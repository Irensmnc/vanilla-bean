export default {
  name: "VenueCard",
  data() {
    return {
      venue: {
        type: Object,
        default: () => {
          return {};
        }
        // id: 1,
        // title: "The Miners Coffee and Characters",
        // date: "2nd of June",
        // time: "19:00",
        // events: [
        //   { id: "1", name: "Event Name" },
        //   { id: "2", name: "Second Event Name" }
        // ]

      }
    };
  }
}