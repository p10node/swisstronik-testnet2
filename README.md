# Swisstronik Testnets 2 Contracts

## 0.1 Requirement

- NodeJS
- PNPM `npm i -g pnpm`

## 0.2 Repository

- Fork this repo to your Github account, use for give URL to the Github repository on the tasks. (you should use public fork, so the team can see your URL)
- **Do not make any commit!**

## 0.3 Prepare

```bash
pnpm i
```

Copy `.env.example` to `.env`, edit `.env` and update `PRIVATE_KEY="<here>"`

## 1. Deploy a simple contract using Hardhat

Run it

```bash
pnpm script ./scripts/deploy-1.ts
```

```bash
# Check your output, example:

Deployer: 0xABC
Swisstronik contract deployed to: "0xABC" <- copy that for "the deployed contract address"
```

Copy URL of [./contracts/Hello_swtr.sol](./contracts/Hello_swtr.sol) (just click at your repo) for "the link to the Github repository"

## 2. Mint 100 ERC-20 tokens

Run it

```bash
pnpm script ./scripts/deploy-2.ts
```

Copy URL of [./contracts/Token.sol](./contracts/Token.sol) (just click at your repo)  for "the link to the Github repository"

```bash
# Check your output, example:

Deployer: 0xABC
Deployed to: 0xABC <- copy that for "the deployed contract address"
Mint Response: 0xABC
Transfer Response: https://explorer-evm.testnet.swisstronik.com/tx/0xABC <- copy that for "the token transaction link"
```

## 3. Mint a ERC-721 token

Run it

```bash
pnpm script ./scripts/deploy-3.ts
```

Copy URL of [./contracts/ERC721.sol](./contracts/ERC721.sol) (just click at your repo) for "the link to the Github repository"

```bash
# Check your output, example:

Deployer: 0xABC
Deployed to: 0xABC <- copy that for "the deployed contract address"
Mint Response: https://explorer-evm.testnet.swisstronik.com/tx/0xABC <- copy that for URL
```

## 4. Mint a PERC-20 token

Run it

```bash
pnpm script ./scripts/deploy-4.ts
```

Copy URL of [./contracts/PERC20Sample.sol](./contracts/PERC20Sample.sol) (just click at your repo) for "the link to the Github repository"


```bash
# Check your output, example:

Deployer: 0xABC
PERC20Sample was deployed to: 0xABC <- copy that for "the deployed contract address"
Transfer Response: https://explorer-evm.testnet.swisstronik.com/tx/0xABC <- copy that for URL
```

## 5. Deploy a Private NFT

Run it

```bash
pnpm script ./scripts/deploy-5.ts
```

Copy URL of [./contracts/PERC721Sample.sol](./contracts/PERC721Sample.sol) (just click at your repo) for "the link to the Github repository"

```bash
# Check your output, example:

Deployer: 0xABC
Deployed to: 0xABC <- copy that for "the deployed contract address"
Mint Response: https://explorer-evm.testnet.swisstronik.com/tx/0xABC <- copy that for URL
```

## 6. Deploy Proxy

Run it

```bash
pnpm script ./scripts/deploy-6.ts
```

Copy URL of [./contracts/TransparentUpgradeableProxy.sol](./contracts/TransparentUpgradeableProxy.sol) (just click at your repo) for "Enter the deployed contract address [proxy]"


```bash
# Check your output, example:

Deployer: 0xABC
Contract address 1 deployed to: 0xABC
ProxyAdmin address deployed to: 0xABC
Proxy contract address: 0xABC <- copy that for "the deployed proxy contract address"
Contract address 2 deployed to: 0xABC
Response: https://explorer-evm.testnet.swisstronik.com/tx/0xABC <- copy that for "the link to the contract implementation replacement transaction"
```

## Community

- https://t.me/p10nodaemon
- https://t.me/p10node

Swisstronik Ambassador `pierreneter`, `p10node`

Website: https://p10node.com
Contact: pierre@p10node.com

