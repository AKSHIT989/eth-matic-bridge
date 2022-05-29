// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

/// @title AX8 token on ropsten ethereum
/// @author Akshit Soneji
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EthERC20 is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 total_supply
    ) ERC20(name, symbol) {
        _mint(msg.sender, total_supply);
    }
}
