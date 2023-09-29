const amqp = require('amqplib');

function MessageConsumer() {

  async function onMessage() {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel    = await connection.createChannel()
    
    await channel.assertQueue("test-queue")
    await channel.consume("test-queue", data => {
      const response = `${Buffer.from(data.content)}`;
      
      console.log('response', response);
    });
  }

  return {
    onMessage
  }
}

module.exports = MessageConsumer();
