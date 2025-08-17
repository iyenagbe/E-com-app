    import express from 'express';
    import cors from 'cors';
    import 'dotenv/config';
    import connectDB from './config/mongodb.js';
    import connectCloudinary from './config/cloudinary.js';
    import userRouter from './routes/userRoute.js';
    import productRouter from './routes/productRoute.js';

    // App config
    const app = express();
    const port = process.env.PORT || 4000;
    connectDB()
    connectCloudinary()

    // Middleware
    app.use(express.json());
    app.use(cors());

    // Logger (optional - to see incoming requests)
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.path}`);
        next();
    });

    // Root route or api endpoint
        app.use('/api/user', userRouter)
        app.use('/api/product', productRouter);


    app.get('/', (req, res) => {
        res.send("API Working");
    });

    // POST route to add a product
    app.post('/api/product/add', (req, res) => {
        const { name, price, description } = req.body;

        console.log('Received product:', { name, price, description });

        res.status(201).json({
            message: 'Product added successfully',
            product: { name, price, description }
        });
    });

    // Start server
    app.listen(port, () => console.log('Server started on PORT : ' + port));
