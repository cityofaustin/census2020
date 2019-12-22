const { getEvents } = require('./spreadsheet');

getEvents()
  .then((events) => {
    console.log(Object.keys(events));
  })
  .catch((error) => {
    console.error(error);
  })