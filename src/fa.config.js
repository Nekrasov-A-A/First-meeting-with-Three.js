import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
 
} from "@fortawesome/vue-fontawesome";

import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

  import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

  library.add(
    faPhone,
    faEnvelope,
    faWhatsapp,
    faTelegram
  );
  
  Vue.component("font-awesome-icon", FontAwesomeIcon);