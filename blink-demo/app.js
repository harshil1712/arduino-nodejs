const five = require("johnny-five")
const board = five.Board()

board.on("ready", ()=> {
    const led = new five.Led(10)

    led.pulse();

  // Stop and turn off the led pulse loop after
  // 10 seconds (shown in ms)
  board.wait(10000, () => {

    // stop() terminates the interval
    // off() shuts the led off
    led.stop().off();
  });

    board.on("exit", () => {
        led.off();
      });
})