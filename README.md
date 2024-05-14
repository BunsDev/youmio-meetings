<p align="center">

</p>

<h1 align="center">Youmio</h1>
<a href='https://postimg.cc/2bKTYMXS' target='_blank'><img src='https://i.postimg.cc/hvSYLqLT/Xnapper-2024-05-13-18-39-32.png' border='0' alt='Youmio Interface'/></a>
<p align="center">
    <a href="https://youtu.be/FwV3H47Wsuk" title="Tutorial Video">🖥️ Video</a>
    ·
    <a href="https://github.com/sensurusirupus/youmio" title="GitHub Repository">📂 Repo</a>
    ·
    <a href="https://github.com/sensurusirupus/youmio/issues" title="🐛 Report Bug / 🎊 Request Feature">🚀 Got Issue</a>
    ·
    <a href="https://docs.google.com/document/d/1zdZxR7siujQR44Uy0TmLsu9wlRbazPjuaxWq82KxRWk/edit?usp=sharing" title="🐛 Report Bug / 🎊 Request Feature">📑 White Paper</a>
    ·
    <a href="https://youmio.netlify.app" title="🐛 Report Bug / 🎊 Request Feature">🔗 Link</a>
    
</p>

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
- **React and Next.js**: Powers the dynamic and responsive front end.
- **Tailwind CSS**: Facilitates rapid UI development with its utility-first framework.
- **Lisk Sepolia Testnet**: For deploying and testing smart contracts.

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
# Create a .env file and update with your variables
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
    "lisk-sepolia": {
      url: 'https://rpc.lisk.com',
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
- **Pioneering Technology Use**: Our innovative application of Live
- **Innovative Use of Technology**: Leveraging Livepeer and IPFS to solve traditional problems in video conferencing.

peer and IPFS addresses significant issues in traditional video conferencing.

### What's Next for Youmio 🔮

- **Feature Expansion**: Planning to introduce AI moderation, more interactive tools, and accessibility features.
- **Wider Device Support**: Aiming to support a broader range of devices and platforms.

**Contract Address:** 0x58F67AA868A253514262357
**Deployed Link:** [0x58F67AA868A253514262357](https://sepolia-blockscout.lisk.com/address/0x58F67AA868A253514262357118aBC74E79363e57)
