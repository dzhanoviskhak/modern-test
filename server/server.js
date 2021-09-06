const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5050;

//middleares
app.use(cors());
app.use(express.json());

app.post('/', function (req, res) {
  let data = {
    bars: {
      'Jan.': Math.floor(Math.random() * 50) + 1,
      'Feb.': Math.floor(Math.random() * 50) + 1,
      'Mar.': Math.floor(Math.random() * 50) + 1,
      'Apr.': Math.floor(Math.random() * 50) + 1,
      May: Math.floor(Math.random() * 50) + 1,
      'Jun.': Math.floor(Math.random() * 50) + 1,
      'Jul.': Math.floor(Math.random() * 50) + 1,
      'Aug.': Math.floor(Math.random() * 50) + 1,
      'Sep.': Math.floor(Math.random() * 50) + 1,
      'Oct.': Math.floor(Math.random() * 50) + 1,
      'Nov.': Math.floor(Math.random() * 50) + 1,
      'Dec.': Math.floor(Math.random() * 50) + 1,
    },
    pie: {
      Data1: Math.floor(Math.random() * 100) + 1,
      Data2: Math.floor(Math.random() * 100) + 1,
      Data3: Math.floor(Math.random() * 100) + 1,
    },
  };
  console.log(data);
  res.send(data);
});

//server
async function start() {
  try {
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}`)
    );
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
