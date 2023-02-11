// SPDX-License-Identifier: GPL-3.0
// лицензия пищется с целью адекватного компилировния (без лицензии warning)
pragma solidity ^0.8.13; // версия Solidity

import "@openzeppelin/contracts/token/ERC721/ERC721.sol"; // import шаблона от openzeppelin

contract DimenToken is ERC721 { // начало контракта имя контракта после слова is прописываются наследуемые контракты
    
    uint256 public supply = 100;
    uint256 public supplyCounter;

    constructor() ERC721("DimasPhotos", "DP") {} // 

    function mint(uint256 _amount) public {
        require(
            supply >= supplyCounter + _amount,
            "Purchase would exceed max supply"
        );
        for (uint256 i = 1; i <= _amount;) {
            _safeMint(msg.sender, supplyCounter + i);
            unchecked { i++; } // проверка переполнения
        }
        supplyCounter += _amount;
    }
}