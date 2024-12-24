import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    seen: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const chatSchema = new mongoose.Schema(
  {
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Chat participants
    messages: [messageSchema], // Embedded messages
  },
  { timestamps: true }
);

export default mongoose.model('Chat', chatSchema);
