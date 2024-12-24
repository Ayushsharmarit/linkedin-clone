import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    profilePhoto: { type: String }, // URL to profile picture
    headline: { type: String, trim: true }, // e.g., "Software Engineer"
    location: { type: String, trim: true },
    bio: { type: String, trim: true },
    skills: [{ type: String }], // Array of skills
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // References to connected users
    resetToken: { type: String }, // For password recovery
    resetTokenExpiry: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
