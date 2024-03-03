const express = require('express');
const router = express.Router();
const Url = require('../models/url');

router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  const url = new Url({
    originalUrl,
    shortUrl: shortid.generate(),
  });

  await url.save();

  res.json({ shortUrl: url.shortUrl });
});

router.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;

  const url = await Url.findOne({ shortUrl });

  if (!url) {
    return res.status(404).send('URL not found');
  }

  url.clicks++;
  await url.save();

  res.redirect(url.originalUrl);
});

module.exports = router;
