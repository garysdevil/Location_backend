const amqp = require('amqplib/callback_api');

amqp.connect('amqp://gary:gary@127.0.0.1:5672', (error0, connection) => {
    if (error0) {
        throw error0;
    }
    connection.createChannel((error1, channel) => {
        if (error1) {
            throw error1;
        }
        channel.assertExchange('hello', 'direct', { durable: false });
        const queue = 'hello';
        const msg = 'Hello World!';

        channel.assertQueue(queue, {
            durable: true,
        });
        channel.sendToQueue(queue, Buffer.from(msg), { persistent: true }); 

        console.log(' [x] Sent %s', msg);
    });
    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 500);
});
