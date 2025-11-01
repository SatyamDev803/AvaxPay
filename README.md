
# AvaxPay

A decentralized payment platform built on the Avalanche blockchain that enables users to create shareable payment links and QR codes for instant crypto payments.

---

## Live Demo

Visit the live demo at [https://avax-pay.vercel.app/](https://avax-pay.vercel.app/)

---

## Features

- **Payment Links** – Create unique, shareable payment links with custom amounts and descriptions  
- **QR Code Generation** – Generate scannable QR codes for seamless mobile payments  
- **Blockchain Integration** – Real smart contract interaction with Avalanche C-Chain  
- **Wallet Management** – Connect MetaMask, Core, and WalletConnect wallets  
- **Payment Tracking** – Dashboard to monitor created links and transaction history  
- **Subscription Support** – Manage recurring payments and subscriptions  
- **Responsive Design** – Mobile-first UI with dark/light theme support  
- **Real-time Updates** – Live transaction tracking via Snowtrace explorer  

---

## Tech Stack

### Frontend
- **Next.js 16** – React framework with App Router  
- **TypeScript** – Type-safe development  
- **Tailwind CSS** – Utility-first styling  
- **ShadCN UI** – Modern UI components  
- **Wagmi v2** – Ethereum wallet connector  
- **RainbowKit** – Wallet connection interface  
- **QRCode.React** – QR code generation  

### Blockchain
- **Network:** Avalanche Fuji Testnet (Chain ID: 43113)  
- **Smart Contracts:** Payment Processor & Subscription Manager  
- **Web3 Integration:** Direct Avalanche C-Chain interaction  

### Tools & Services
- **Vercel** – Deployment and hosting  
- **GitHub** – Version control  
- **WalletConnect** – Cross-wallet connection  
- **Snowtrace** – Blockchain explorer integration  

---

## Quick Start

### Prerequisites
- Node.js 18+  
- pnpm package manager  
- A Web3 wallet (MetaMask, Core, or WalletConnect compatible)

### Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/avaxpay.git
cd avaxpay

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env.local

# Start development server
pnpm dev
````

Visit [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

| Variable                               | Description                           |
| -------------------------------------- | ------------------------------------- |
| `NEXT_PUBLIC_CHAIN_ID`                 | 43113                                 |
| `NEXT_PUBLIC_NETWORK`                  | testnet                               |
| `NEXT_PUBLIC_FUJI_RPC_URL`             | Avalanche Fuji RPC URL                |
| `NEXT_PUBLIC_APP_URL`                  | Application base URL                  |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | WalletConnect project ID              |
| `NEXT_PUBLIC_AVAXPAY_PROCESSOR`        | Payment processor contract address    |
| `NEXT_PUBLIC_SUBSCRIPTION_MANAGER`     | Subscription manager contract address |
| `NEXT_PUBLIC_MOCK_USDC`                | Mock USDC token address               |
| `NEXT_PUBLIC_MOCK_USDT`                | Mock USDT token address               |

---

## Usage

### Create a Payment Link

1. Navigate to **Create Payment Link**
2. Enter recipient wallet address
3. Specify token (AVAX, USDC, USDT) and amount
4. Add description and optional memo
5. Click **Create Payment Link**
6. Copy or share the link, or download the QR code

### Send Payment

1. Visit the payment link or scan the QR code
2. Connect your wallet when prompted
3. Review the payment details
4. Confirm transaction in your wallet
5. View transaction on Snowtrace

### Dashboard

* View all created payment links
* Track payment history
* Monitor subscription status
* Access analytics and insights

---

## Project Structure

```
avaxpay/
├── app/
│   ├── page.tsx                # Home page
│   ├── send/                   # Payment sending
│   ├── dashboard/              # User dashboard
│   ├── create-payment-link/    # Link creation
│   └── providers.tsx           # Wagmi & RainbowKit providers
├── components/
│   ├── layout/                 # Layout components
│   ├── payment/                # Payment-related UI
│   ├── dashboard/              # Dashboard components
│   └── ui/                     # ShadCN UI components
├── lib/
│   ├── contract.ts             # Smart contract interactions
│   ├── hooks/                  # Custom React hooks
│   └── utils.ts                # Utility functions
└── public/                     # Static assets
```

---

## Build & Deployment

### Local Build

```bash
pnpm build
pnpm start
```

### Deploy to Vercel

1. Push your repository to GitHub
2. Connect the repository to [Vercel](https://vercel.com)
3. Configure environment variables in the Vercel dashboard
4. Deploy automatically from the `main` branch

---

## Testing

```bash
# Development mode
pnpm dev

# Production build
pnpm build

# Type checking
pnpm tsc --noEmit

# Linting
pnpm eslint .
```

---

## Supported Networks

* Avalanche Fuji Testnet (43113) – Default
* Avalanche Mainnet – Coming soon

---

## Security

* Non-custodial wallet connections (no private keys stored)
* Audited smart contracts for payment security
* Real-time blockchain transaction verification
* Immutable on-chain transactions

---

## Troubleshooting

| Issue                 | Solution                                                        |
| --------------------- | --------------------------------------------------------------- |
| Wallet not connecting | Ensure wallet is set to Avalanche Fuji Testnet or reconnect     |
| Payment fails         | Verify sufficient AVAX for gas fees and valid recipient address |
| QR Code not scanning  | Increase QR code size or use a different QR scanner             |

---

## Documentation

* [Avalanche Docs](https://docs.avax.network)
* [Wagmi Docs](https://wagmi.sh)
* [RainbowKit Guide](https://rainbowkit.com)
* [Next.js Docs](https://nextjs.org/docs)

---

## Contributing

1. Fork the repository
2. Create a new feature branch

   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add amazing feature"
   ```
4. Push to your branch

   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

---

## License

MIT License – feel free to use this project for personal or commercial purposes.

---

## Acknowledgments

* Avalanche Network for blockchain infrastructure
* RainbowKit for wallet UI components
* ShadCN for elegant UI design
* Vercel for hosting and deployment



---

## Support

For issues or suggestions:

* Open a [GitHub Issue](https://github.com/YOUR_USERNAME/avaxpay/issues)
* Email: **[support@avaxpay.com](mailto:support@avaxpay.com)**
* Join our Discord community