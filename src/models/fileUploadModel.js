import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    fileType: { type: String, required: true, enum: ['image', 'video', 'document'] },
    fileURL: { type: String, required: true },
    fileSize: { type: Number }, // Size in bytes
  },
  { timestamps: true }
);

export default mongoose.model('File', fileSchema);
