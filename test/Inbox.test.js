const assert = require("assert");
const ganache = require("ganache-cli");
const { parse } = require("path");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let defaultMessage = "Hi there Neshoma. Keep Up your head up";
let newMessage = "Maybe you should relax because you seem awfully tired.";

let accounts;
let inbox;

beforeEach(async () => {
  // get a list of all acounts
  web3.eth.getAccounts();
  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [defaultMessage] })
    .send({ from: accounts[0], gas: "1000000" });

  // .then(fetchedAccounts => {
  //     console.log(fetchedAccounts);
  // })
});

// use one of those accounts to deploy contract
describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
  });

  it("has initializing message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, defaultMessage);
  });

  it("has a setter method to change the message", async () => {
    await inbox.methods.setMessage(newMessage).send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, newMessage);
  });
});

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
