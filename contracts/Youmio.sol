pragma solidity ^0.8.0;

contract Youmio {
    // State variables
    mapping(address => uint256) public balances;
    mapping(uint256 => NFT) public nfts;
    uint256 public nextNftId = 1;
    uint256 public constant SIGNUP_REWARD = 10;

    // NFT structure
    struct NFT {
        uint256 id;
        string imageUrl;
        string description;
        uint256 price;
        address owner;
    }

    // Events
    event MeetingCreated(address indexed user, string meetingDetails);
    event MeetingScheduled(address indexed user, string scheduleDetails);
    event NftMinted(address indexed owner, uint256 nftId, string imageUrl, string description, uint256 price);
    event SignedUp(address indexed user, uint256 reward);

 
    // Functions
    function signUp() external {
        require(balances[msg.sender] == 0, "User already signed up.");
        balances[msg.sender] = SIGNUP_REWARD;
        emit SignedUp(msg.sender, SIGNUP_REWARD);
    }

    function createMeeting(string calldata meetingDetails) external {
        emit MeetingCreated(msg.sender, meetingDetails);
    }

    function scheduleMeeting(string calldata scheduleDetails) external {
        emit MeetingScheduled(msg.sender, scheduleDetails);
    }

    function mintNft(string calldata imageUrl, string calldata description, uint256 price) external {
        uint256 nftId = nextNftId++;
        nfts[nftId] = NFT(nftId, imageUrl, description, price, msg.sender);
        emit NftMinted(msg.sender, nftId, imageUrl, description, price);
    }

    function getNft(uint256 nftId) public view returns (NFT memory) {
        require(nfts[nftId].id != 0, "NFT does not exist.");
        return nfts[nftId];
    }

    function getAllNfts() public view returns (NFT[] memory) {
        NFT[] memory allNfts = new NFT[](nextNftId - 1);
        for (uint256 i = 1; i < nextNftId; i++) {
            allNfts[i - 1] = nfts[i];
        }
        return allNfts;
    }
}
