// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "./ERC20_ETH.sol";
import "./ERC20_MATIC.sol";

contract EthMaticBridge is EthERC20, MaticERC20 {
    function convertEthToMatic(uint256 amount) public {
        _burn(msg.sender, amount);
        _mint(msg.sender, amount);
    }
}
