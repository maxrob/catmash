import mongoose, { Schema } from 'mongoose';


export interface CatType extends Document {
  _id: string;
  name: string;
  avatar: string;
  score: number;
}

const catSchema: Schema = new Schema({
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

export default mongoose.model<CatType>('Cat', catSchema);
