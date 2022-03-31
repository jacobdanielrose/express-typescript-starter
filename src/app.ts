import express, { Express, Request, Response } from 'express';
import path from 'path';
const ejsMate = require('ejs-mate');

const app: Express = express();

// Configure Express to use EJS
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set( "views", path.join( __dirname, "views" ) );
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req: Request, res: Response) => {
  res.render('index');
});

export default app;