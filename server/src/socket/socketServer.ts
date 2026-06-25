import { Server } from "socket.io";

export const initializeSocket = (
  io: Server
) => {
  io.on("connection", (socket) => {
    console.log(
      `User Connected: ${socket.id}`
    );

    socket.on(
      "join-channel",
      (channelId: string) => {
        socket.join(channelId);

        console.log(
          `Socket ${socket.id} joined channel ${channelId}`
        );
      }
    );

    socket.on(
      "leave-channel",
      (channelId: string) => {
        socket.leave(channelId);

        console.log(
          `Socket ${socket.id} left channel ${channelId}`
        );
      }
    );

    socket.on("disconnect", () => {
      console.log(
        `User Disconnected: ${socket.id}`
      );
    });
  });
};