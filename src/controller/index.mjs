import service from "../service/PointService.mjs";
import protocolObj from "../protocol/protocol.mjs";
import http from 'node:http'

const server = http.createServer();
protocol(protocolObj);
server.listen(3600);
console.log("server Listening port 3600");

function protocol(protocolObj) {
   for (let eventName in protocolObj) {
      server.on(eventName, protocolObj[eventName]);
   }
}

const eventNames = server.eventNames();
server.on('request', async (req, res) => {
   let data = '';
   const eventName = req.url;
   if (!eventNames.includes(eventName)) {
      sendResponse(res, 404, `${eventName} doesn't exists`);
   } else  {
      for await (const part of req) {
         data += part;
      }
      const {code, response} = await getResponse(data, req.url);
      sendResponse(res, code, response);
   }
})

function sendResponse(res, code, response) {
   res.statusCode = code;
   res.write(response);
   res.end();
}

async function getResponse(data, eventName) {
   return new Promise(resolve => {
      server.on("response", (res) => {
         resolve(res);
      })
      server.emit(eventName, data, server, service);
   })
};