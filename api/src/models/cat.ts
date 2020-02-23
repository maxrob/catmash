import mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
});

export const Cat = mongoose.model('Cat', catSchema);
