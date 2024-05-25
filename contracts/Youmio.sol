// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/vrf/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol";

contract Youmio is VRFConsumerBaseV2 {
    VRFCoordinatorV2Interface COORDINATOR;
    uint64 s_subscriptionId;
    address vrfCoordinator;
    bytes32 keyHash;
    uint32 callbackGasLimit;
    uint16 requestConfirmations;
    uint32 numWords;

    mapping(address => uint256) public balances;
    mapping(uint256 => NFT) public nfts;
    uint256 public constant SIGNUP_REWARD = 10;

    struct NFT {
        uint256 id;
        string imageUrl;
        string description;
        uint256 price;
        address owner;
    }

    struct MintRequest {
        address requester;
        string imageUrl;
        string description;
        uint256 price;
    }

    mapping(uint256 => MintRequest) public mintRequests;
    uint256 public requestCounter;

    // Events
    event MeetingCreated(address indexed user, string meetingDetails);
    event MeetingScheduled(address indexed user, string scheduleDetails);
    event NftMinted(address indexed owner, uint256 nftId, string imageUrl, string description, uint256 price);
    event SignedUp(address indexed user, uint256 reward);
    event MintRequested(address indexed requester, uint256 requestId);

    // Constructor
    constructor(
        uint64 subscriptionId,
        address _vrfCoordinator,
        bytes32 _keyHash,
        uint32 _callbackGasLimit,
        uint16 _requestConfirmations,
        uint32 _numWords
    ) VRFConsumerBaseV2(_vrfCoordinator) {
        COORDINATOR = VRFCoordinatorV2Interface(_vrfCoordinator);
        s_subscriptionId = subscriptionId;
        vrfCoordinator = _vrfCoordinator;
        keyHash = _keyHash;
        callbackGasLimit = _callbackGasLimit;
        requestConfirmations = _requestConfirmations;
        numWords = _numWords;
    }

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

    function requestMintNft(string calldata imageUrl, string calldata description, uint256 price) external {
        requestCounter++;
        mintRequests[requestCounter] = MintRequest(msg.sender, imageUrl, description, price);
        uint256 requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        emit MintRequested(msg.sender, requestId);
    }

    function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords) internal override {
        MintRequest storage request = mintRequests[requestId];
        uint256 nftId = randomWords[0];
        nfts[nftId] = NFT(nftId, request.imageUrl, request.description, request.price, request.requester);
        emit NftMinted(request.requester, nftId, request.imageUrl, request.description, request.price);
    }

    function getNft(uint256 nftId) public view returns (NFT memory) {
        require(nfts[nftId].id != 0, "NFT does not exist.");
        return nfts[nftId];
    }

    function getAllNfts() public view returns (NFT[] memory) {
        NFT[] memory allNfts = new NFT[](requestCounter);
        for (uint256 i = 1; i <= requestCounter; i++) {
            allNfts[i - 1] = nfts[i];
        }
        return allNfts;
    }
}