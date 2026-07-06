  import mongoose, {
    Schema,
    Document,
  } from "mongoose";

  export interface IMessage
    extends Document {
    content: string;
    channel: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
  }

  const messageSchema =
    new Schema<IMessage>(
      {
        content: {
          type: String,
          required: true,
          trim: true,
        },

        channel: {
          type: Schema.Types.ObjectId,
          ref: "Channel",
          required: true,
        },

        sender: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      },
      {
        timestamps: true,
      }
    );

  const Message =
    mongoose.model<IMessage>(
      "Message",
      messageSchema
    );

  export default Message;

 