/* global App */

import Worker from 'wagerates/models/worker';

export default {
  name: "instantiateGlobalWorkerModel",
  initialize: function(container) {
    if (App) App.Worker = Worker.create();
  }
};