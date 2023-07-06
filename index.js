const app = require('express')();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/api/login', (req, res) => {
  res.status(200).send({
    token : "abcdefgh"
  });
});