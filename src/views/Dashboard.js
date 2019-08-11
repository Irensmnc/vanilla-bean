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
    axios.get("//localhost:8080/dashboard").then(({ data }) => {
      this.events = data.events.events;
      this.isLoading = false;
    });
  }
}