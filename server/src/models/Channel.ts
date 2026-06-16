import mongoose, {
  Schema,
  Document,
} from "mongoose";
export interface IChannel
  extends Document {
  name: string;
   workspace: mongoose.Types.ObjectId;
}
const channelSchema =
  new Schema<IChannel>(
    {
        name: 
        {
        type: String,
        required: true,
        trim: true,
        },
        workspace: {
        type: Schema.Types.ObjectId,
        ref: "Workspace",
        required: true,
        },
        
    },
     {
  timestamps: true,
}
    
  );

  const Channel = mongoose.model<IChannel>(
  "Channel",
  channelSchema
);

export default Channel;

 