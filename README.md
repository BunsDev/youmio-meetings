<p align="center">
 
</p>

<h1 align="center">Youmio</h1>
<a href='https://postimg.cc/2bKTYMXS' target='_blank'><img src='https://i.postimg.cc/hvSYLqLT/Xnapper-2024-05-13-18-39-32.png' border='0' alt='Xnapper-2024-05-13-18-39-32'/></a>
<p align="center">
    <a href="https://youtu.be/FwV3H47Wsuk" title="Tutorial Video">🖥️ Video</a>
    .
    <a href="https://github.com/sensurusirupus/youmio" title="GitHub Repository">📂 Repo</a>
    ·
    <a href="https://github.com/sensurusirupus/youmio/issues" title="🐛Report Bug/🎊Request Feature">🚀 Got Issue</a>
</p>

### What Inspired Us 💡

In a digital era moving swiftly towards decentralized applications, there's a growing need to redefine existing Web2 solutions using Web3 technologies. Our project, Youmio, is inspired by the necessity for secure, decentralized communication tools, capable of overcoming the limitations of traditional video conferencing apps by utilizing blockchain and peer-to-peer technologies.

### What it Does ⚙️

Youmio is a decentralized video conferencing tool built with Web3 technologies, enabling:

- **Decentralized Streaming**: Utilizes the Livepeer protocol for decentralized video streaming, ensuring high-quality, scalable, and cost-effective video delivery.
- **Secure Video and Image Storage**: Employs IPFS for decentralized and secure storage of images and other media, enhancing privacy and control over data.
- **Web3 Authentication**: Implements blockchain-based authentication methods to secure access and validate user interactions.
- **Interactive and Scalable Meetings**: Supports interactive features like live chat, screen sharing, and real-time reactions, all managed in a decentralized manner.
- **Enhanced User Control**: Provides users with greater control over their data and privacy, typical of decentralized applications.

These features make Youmio a pioneering solution, demonstrating the potential of Web3 to enhance the functionality and security of online communication platforms.

### How This App was Built 🛠️

This project integrates the following cutting-edge technologies:

- **Blockchain for Backend**: Leveraging Ethereum for smart contracts and user authentication.
- **Livepeer Protocol**: Utilized for decentralized video streaming.
- **IPFS**: Employed for decentralized storage of images and media content.
- **Frontend**: Crafted with React and Next.js for a responsive, dynamic user interface.
- **Styling with Tailwind CSS**: Used for its utility-first properties that accelerate development.
- **Lisk Testnet**: Smart Contract Deployed on Lisk Sepolia Testnet

### Prerequisites

- [Node.js](https://nodejs.org/en/) Installed
- [Git](https://git-scm.com/) Installed
- [npm](https://www.npmjs.com/) Installed

### Installation Steps

1. Clone the repository

```Bash
git clone https://github.com/sensurusirupus/youmio
```

2. Change the working directory

```Bash
cd youmio
```

3. Install dependencies

```Bash
npm install
```

4. Set up environment variables (Refer to Configuration below)

5. Start the application

```Bash
npm run dev
```

**🎇 You are Ready to Go!**

### Configuration

Set the environment variables in a `.env` file in the root directory as follows:

```Bash
require('@nomiclabs/hardhat-waffle');
const privateKey = 'xx';
const projectId = 'xx';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1029,
    },
    "your-testnet": {
      url: 'test-net-rpc-url',
      accounts: [privateKey],
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
```

### Challenges We Ran Into 🧗‍♂️

- **Integration(Blockchain)**: Integrating blockchain and live streaming protocols into a seamless user experience.
- **Data Security and Decentralization**: Maintaining high standards of data security and privacy in a fully decentralized environment.

### Accomplishments We're Proud Of 💪

- **Decentralized Architecture**: Successfully built a video conferencing tool on a decentralized platform, setting a new benchmark for privacy and user control in digital communication.
- **Innovative Use of Technology**: Leveraging Livepeer and IPFS to solve traditional problems in video conferencing.

### What's Next for Youmio 🔮

- **Expansion of Features**: Introduction of more interactive and advanced features such as AI-based moderation tools.
- **Broader Accessibility**: Enhancing compatibility across different devices and operating systems to reach a wider audience.

Contract Address: 0x58F67AA868A253514262357118aBC74E79363e57
Contract Deployed Link: https://sepolia-blockscout.lisk.com/address/0x58F67AA868A253514262357118aBC74E79363e57
