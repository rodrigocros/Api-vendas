import 'reflect-metadata';
import express, { NextFunction, Response, Request } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import { AppDataSource } from '@shared/typeorm/data-source';

const app = express();

app.use(cors());
app.use(express.json());
AppDataSource.initialize().then(async () => {
    console.log('Database connected!');

});


app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
});

app.listen(3333, () => console.log('Server is running!'));
