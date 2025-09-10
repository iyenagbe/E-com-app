// import express from "express";
// import multer from "multer";
// import path from "path";
// import { addProduct, listProduct, removeProduct, singleProduct } from "../controllers/productController.js";

// const router = express.Router();

// // Multer storage config
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/"); // make sure "uploads" folder exists
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage });

// // Route for adding product with up to 4 images
// router.post(
//     "/add",
//     upload.fields([
//         { name: "image1", maxCount: 1 },
//         { name: "image2", maxCount: 1 },
//         { name: "image3", maxCount: 1 },
//         { name: "image4", maxCount: 1 }
//     ]),
//     addProduct
// );

// router.get("/list", listProduct);
// router.get("/:id", singleProduct);
// router.delete("/:id", removeProduct);

// export default router;


import express from "express";
import { addProduct, listProduct, removeProduct, singleProduct } from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

// Route to add a new product
productRouter.post("/add", adminAuth, upload.fields([
        {name: 'image1', maxCount: 1},
        {name: 'image2', maxCount: 1}, 
        {name: 'image3', maxCount: 1}, 
        {name: 'image', maxCount: 1}]), 
        addProduct);

// Route to remove a product
productRouter.post("/remove" ,adminAuth, removeProduct);
productRouter.post("/single", singleProduct);

productRouter.get("/list", listProduct);

export default productRouter;


