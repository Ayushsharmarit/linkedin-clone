import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who created the post
    content: { type: String, required: true }, // Text content of the post
    file: { type: String }, // File URL (photo/video/document)
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users who liked the post
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    shares: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Post', postSchema);
