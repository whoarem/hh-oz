// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Box.sol";

contract BoxV2 is Box {
    uint256 private _value;

    function increment() public {
        _value = _value + 1;
        emit ValueChanged(_value);
    }
}
