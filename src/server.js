const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const app = express();

mongoose.connect('mongodb://localhost/url-shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes and middleware go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
