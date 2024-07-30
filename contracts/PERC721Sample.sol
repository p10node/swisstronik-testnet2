// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "./ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "hardhat/console.sol";

contract MyPERC721Token is ERC721, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 private _nextTokenId = 0;

    constructor() ERC721("MyToken", "MTK") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function safeMint(address to) public onlyRole(MINTER_ROLE) {
        _safeMint(to, _nextTokenId);
        console.log("Mint success", _nextTokenId);

        _nextTokenId = _nextTokenId + 1;
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    // disabled logs and signature check in the balanceOf function
    function balanceOf(
        address account
    ) public view virtual override returns (uint256) {
        if (account == address(0)) {
            revert ERC721InvalidOwner(address(0));
        }

        require(msg.sender == account, "PERC20Sample: msg.sender != account");

        return _balances[account];
    }

    function ownerOf(
        uint256 tokenId
    ) public view virtual override returns (address) {
        address owner = _requireOwned(tokenId);

        require(msg.sender == owner, "PERC20Sample: msg.sender != owner");

        return owner;
    }
}
