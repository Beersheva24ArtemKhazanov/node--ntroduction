import Stream from 'node:stream'

const stream = new Stream.Readable();
stream.push("Hello")
stream.push("World")
stream.push(null)
stream.push()
export default stream;