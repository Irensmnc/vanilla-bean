import axios from "axios";
import VenueCard from "../components/VenueCard";

export default {
  components: { VenueCard },
  data() {
    return {
      isLoading: true,
      events: []
    };
  },
  created() {
    axios.get("//localhost:3000/dashboard").then(({ data }) => {
      this.events = data.events.events;
      console.log(data.events.events);
      this.isLoading = false;
    });
  }
}