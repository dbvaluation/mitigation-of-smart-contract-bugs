//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
    uint256 private _value;

    event valueChanged(uint256 value);

    function store(uint256 value) public onlyOwner {
        _value = value;
        emit valueChanged(value);
    }

    function retrieve() public view returns (uint256) {
        return _value;
    }
}
