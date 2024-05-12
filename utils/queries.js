import { ethers } from 'ethers';
import { contract } from './index';

// Function to parse error messages
function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
}

// Function to handle user signup
export async function signUp() {
  try {
    const contractObj = await contract();
    const transactionResponse = await contractObj.signUp();
    const receipt = await transactionResponse.wait();
    return receipt;
  } catch (e) {
    console.error('Error in signUp:', e);
    return parseErrorMsg(e);
  }
}

// Function to create a meeting
export async function createMeetingS(meetingDetails) {
  try {
    const contractObj = await contract();
    const transactionResponse = await contractObj.createMeeting(meetingDetails);
    const receipt = await transactionResponse.wait();
    return receipt;
  } catch (e) {
    console.error('Error in createMeeting:', e);
    return parseErrorMsg(e);
  }
}

// Function to schedule a meeting
export async function scheduleMeeting(scheduleDetails) {
  try {
    const contractObj = await contract();
    const transactionResponse =
      await contractObj.scheduleMeeting(scheduleDetails);
    const receipt = await transactionResponse.wait();
    return receipt;
  } catch (e) {
    console.error('Error in scheduleMeeting:', e);
    return parseErrorMsg(e);
  }
}

// Function to mint a new NFT
export async function mintNft(imageUrl, description, price) {
  try {
    const priceInWei = ethers.utils.parseEther(price.toString());
    const contractObj = await contract();
    const transactionResponse = await contractObj.mintNft(
      imageUrl,
      description,
      priceInWei,
    );
    const receipt = await transactionResponse.wait();
    return receipt;
  } catch (e) {
    console.error('Error in mintNft:', e);
    return parseErrorMsg(e);
  }
}

// Function to retrieve all minted NFTs
export async function getAllNfts() {
  try {
    const contractObj = await contract();
    const nfts = await contractObj.getAllNfts();
    return nfts.map((nft) => ({
      id: nft.id.toString(),
      imageUrl: nft.imageUrl,
      description: nft.description,
      price: ethers.utils.formatEther(nft.price),
      owner: nft.owner,
    }));
  } catch (e) {
    console.error('Error in getAllNfts:', e);
    return parseErrorMsg(e);
  }
}
