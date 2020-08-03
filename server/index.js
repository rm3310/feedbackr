express = require ('express');
const app = express();

const router = require('./router');
const cors = require('cors');

PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`); // eslint-disable-line no-console
});