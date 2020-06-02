const { ServiceBroker } = require("moleculer");
// Create broker
const broker = new ServiceBroker();

// Create a service
broker.createService({
    name: "math",
    actions: {
        add(ctx) {
            return Number(ctx.params.a) + Number(ctx.params.b);
        }
    }
});
// Start broker
broker.start()
    // Call the service
    .then(() => broker.call("math.add", { a: 5, b: 3 }))
    .then(res => console.log("5 + 3 =", res))

    .then(() => broker.call("math.add", { a: 6, b: -3 }))
    .then(res => console.log("6 + -3 =", res));