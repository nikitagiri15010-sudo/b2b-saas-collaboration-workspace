import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface IWorkspace
  extends Document {
  name: string;
  description?: string;
  owner: mongoose.Types.ObjectId;
  members: mongoose.Types.ObjectId[];
}

const workspaceSchema =
  new Schema<IWorkspace>(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      description: {
  type: String,
  default: "",
},
owner: {
  type: Schema.Types.ObjectId,
  ref: "User",
  required: true,
},
    }
  );