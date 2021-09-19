import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/*
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:8080', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
Vue.use(cors(corsOptions));
*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
