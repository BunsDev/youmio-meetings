import { ethers } from 'ethers';
import Youmio from './Youmio.json';

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      '0x58F67AA868A253514262357118aBC74E79363e57',
      Youmio.abi,
      signer,
    );

    return contractReader;
  }
};
