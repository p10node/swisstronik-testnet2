// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

//This contract is only intended for testing purposes

contract Swisstronik2 {
    string private message;

    /**
     * @dev Constructor is used to set the initial message for the contract
     */
    constructor() payable {}

    /**
     * @dev setMessage() updates the stored message in the contract
     * @param _message The new message to replace the existing one
     */
    function setMessage(string memory _message) public {
        message = _message;
    }

    /**
     * @dev getMessage() retrieves the currently stored message in the contract
     * @return The message associated with the contract
     */
    function getMessage() public view returns (string memory) {
        return message;
    }

    function getMessage2() public pure returns (string memory) {
        return "hi";
    }
}
