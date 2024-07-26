// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract TokenUseProxy is
    Initializable,
    ERC20Upgradeable,
    ERC20PermitUpgradeable
{
    function initialize() public initializer {
        __ERC20_init("TokenUseProxy", "TOKEN");
        __ERC20Permit_init("TokenUseProxy");
    }
}
