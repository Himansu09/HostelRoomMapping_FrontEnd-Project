import axios from "axios";
import authHeader from "./auth-header";

const base_url = "http://localhost:8080/HelpDesk/addhelpdesk";

//
class Service {
  getfeed() {
    return axios.get(base_url, { headers: authHeader() });
  }
  Createfeed(feed) {
    return axios.post(base_url, feed, { headers: authHeader() });
  }

  getfeedId(feedId) {
    return axios.get(base_url + "/" + feedId), { headers: authHeader() };
  }

  deletefeed(feedId) {
    return axios.delete(base_url + "/" + feedId, { headers: authHeader() });
  }
}
export default new Service();
