const ytdl = require('@distube/ytdl-core');

module.exports = (req, res) => {
  if (req.query.v) {
    ytdl.getInfo(req.query.v)
      .then((data) => {
        res.send(data);
      })
  } else {
    res.send(400);
  }
}