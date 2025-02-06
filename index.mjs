import stream from './sender-data.mjs'
let res = '';
stream.on('data', chunk => console.log(res += chunk));
stream.on('end', () => console.log("no more data"));