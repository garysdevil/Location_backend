const amqp = require('amqplib/callback_api');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
amqp.connect('amqp://gary:gary@127.0.0.1:5672', (error0, connection) => {
    if (error0) {
        throw error0;
    }
    connection.createChannel(async (error1, channel) => {
        if (error1) {
            throw error1;
        }

        const queue = 'hello';
        channel.assertQueue(queue, {
            durable: true,
        });
        console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue);
        let ii = 0;
        channel.prefetch(1);
        channel.consume(queue, async msg => {
            await sleep(3000);
            ii += 1;
            console.log(`[${ii}] Received1 %s`, msg.content.toString());
            channel.ack(msg);
        }, {
            noAck: false,
        });
    });
});
