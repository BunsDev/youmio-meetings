<p align="center">

</p>

<h1 align="center">Youmio</h1>
<a href='https://postimg.cc/2bKTYMXS' target='_blank'><img src='https://i.postimg.cc/hvSYLqLT/Xnapper-2024-05-13-18-39-32.png' border='0' alt='Youmio Interface'/></a>

### What Inspired Us 💡

In a rapidly evolving digital landscape that increasingly leans towards decentralization, there is an essential need to rethink conventional online platforms. Youmio emerges from this need, aiming to transform the traditional video conferencing experience using blockchain and peer-to-peer technology to address issues related to security, privacy, and user autonomy.

### What it Does ⚙️

Youmio is not just another video conferencing tool; it's a decentralized platform that redefines real-time communication by incorporating:

- **Decentralized Streaming**: Employs the Livepeer protocol to deliver scalable, high-quality, and cost-effective video streaming.
- **Secure Storage**: Uses IPFS for decentralized storage of video and images, ensuring data sovereignty and enhanced privacy.
- **Blockchain Authentication**: Implements Ethereum smart contracts for robust user authentication and session management.
- **Interactive Features**: Supports live chats, screen sharing, and real-time reactions, all in a decentralized setup.
- **User Empowerment**: Gives users unprecedented control over their data, adhering to the core principles of decentralization.

### How This App was Built 🛠️

Youmio integrates a suite of advanced technologies, providing a robust framework for decentralized applications:

- **Ethereum Blockchain**: Core infrastructure for smart contracts and user authentication.
- **Livepeer**: Utilized for decentralized, efficient video streaming.
- **IPFS**: Handles decentralized and secure data storage.
- **Chainlink VRF**: Provides verifiable randomness for meetings, sign-ups, and batch transactions.
- **React and Next.js**: Powers the dynamic and responsive front end.
- **Tailwind CSS**: Facilitates rapid UI development with its utility-first framework.
- **Mends's Devnet Subnet**: Our custom subnet deployed on Avalanche's AvaCloud for optimal performance and scalability.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)

### Installation Steps

1. **Clone the repository:**

```bash
git clone https://github.com/sensurusirupus/youmio
```

2. **Change directory:**

```bash
cd youmio
```

3. **Install dependencies:**

```bash
npm install
```

4. **Configure environment variables:**

```bash
# Create a .env file and update with your
echo "PRIVATE_KEY=your_private_key_here" > .env
```

5. **Start the development server:**

```bash
npm run dev
```

**🎇 Voilà! Your setup is complete and Youmio is ready to run.**

### Configuration

Here’s an example of how you can set your environment variables in a `.env` file located in the project root:

```bash
require('@nomiclabs/hardhat-waffle');
const privateKey = process.env.PRIVATE_KEY;
const projectId = 'your_project_id';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1029,
    },
    "mends-devnet": {
      url: 'https://subnets.avacloud.io/c7cfaccc-4b39-430b-ac23-23709ae14359',
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

### Challenges We Ran Into 🧗

- **Integration of Technologies**: Seamlessly integrating blockchain, streaming, and storage technologies posed significant challenges.
- **Data Security and Decentralization**: Upholding high standards of security in a decentralized environment was critical and challenging.

### Accomplishments We're Proud Of 💪

- **Fully Decentralized System**: Built a completely decentralized video conferencing platform.
- **Pioneering Technology Use**: Our innovative application of Livepeer, IPFS, and Chainlink VRF addresses significant issues in traditional video conferencing.

### What's Next for Youmio 🔮

- **Feature Expansion**: Planning to introduce AI moderation, more interactive tools, and accessibility features.
- **Wider Device Support**: Aiming to support a broader range of devices and platforms.

Contract Address: 0x0C4361c038696dB4e2A28367689e60eE6F8F94FB
**Deployed Link:** [0x0C4361c038696dB4e2A28367689e60eE6F8F94FB](https://testnet.snowtrace.io/address/0x0C4361c038696dB4e2A28367689e60eE6F8F94FB)
