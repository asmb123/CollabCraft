import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
	cors: {
		origin: "*",
	},
});

io.on("connection", (socket) => {
	console.log("User joined : ", socket.id);
	socket.on("send-changes", (delta) => {
		console.log(delta);
		socket.broadcast.emit("receive-changes", delta);
	});
});

httpServer.listen(3000);