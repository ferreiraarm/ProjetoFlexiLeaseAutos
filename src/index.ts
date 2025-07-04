import express from 'express';
import { AppDataSource } from './database/data-source-cli';
import routes from './index.routes';
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
});

AppDataSource.initialize()
    .then(() => {
        console.log('Databasse inicializada!');
    })
    .catch((error) => console.log(error));
