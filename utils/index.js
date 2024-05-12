import { ethers } from 'ethers';
import Youmio from './Youmio.json';

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      '0x46ca0e97De7866DC18Caa3E925C5D51D3586594E',
      Youmio.abi,
      signer,
    );

    return contractReader;
  }
};
