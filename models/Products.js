import mongoose from 'mongoose';
const { Schema } = mongoose

const productsSchema = new mongoose.Schema({
      _id: {type: String, required: false},
      companyName: { type: String, required: true },
      productName: {  type: String, required: true },
      description: { type: String, required: true },
      slug: {type: String, required: true},
      price: {  type: Number, required: true, default: 0 },
      discount: {  type: Number, required: false, default: 0 },
      images: { type: Array, required: false}
  },
  {
    timestamps: true,
  },
);

const Products =
  mongoose.models.Products || mongoose.model('Products', productsSchema, "ecommerce");
export default Products;
