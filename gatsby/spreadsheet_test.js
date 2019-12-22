const { getEvents } = require('./spreadsheet');

getEvents()
  .then((events) => {
    console.log(events);
  })
  .catch((error) => {
    console.error(error);
  })