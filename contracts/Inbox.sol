pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }

    // https://rinkeby.infura.io/v3/fa80dc3692a3432db5c164171ce3c560

    
}