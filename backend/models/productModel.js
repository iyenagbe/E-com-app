import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     cartData: { type: Object, default: {} },
// }, { minimize: false })

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desription: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean, require: false },
    images: { type: Array, required: true },
    date: { type: Number, require: true }
})

const productModel = mongoose.models.user || mongoose.model('user', userSchema);

export default productModel;