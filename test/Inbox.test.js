const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());



// let car

// beforeEach(() =>  {
//     // console.log('vibes');
//     car = new Car();
// });
// class Car {
//   park() {
//     return "stopped";
//   }

//   drive() {
//     return "vroom";
//   }
// }

// describe("Car Methods Test", () => {
//   it("it can park with good vibes returning 'stopped", () => {
//     assert.equal(car.park(), "stopped");
//   });

//   it('can vroom drive', () => {
//     assert.equal(car.drive(), 'vroom');
//   })
// });
