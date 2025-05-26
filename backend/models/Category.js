import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  icon: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null }, 
  author: String,
  tags: [String],
  title: String,

}, { timestamps: true });

export default mongoose.model('Category', CategorySchema);
