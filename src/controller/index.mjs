import PointService from "../service/PointService.mjs";
import PrototypeProtocol from "./prototype-protocol.mjs";
import http from 'node:http'

const server = http.createServer();
const service = new PointService()
const protocol = new PrototypeProtocol(service, server);

server.listen(3600);
server.on('request', async (req, res) => {
   let data = '';
   for await (const part of req) {
      data += part;
   }
   server.emit(req.url, data, res); 
  
})