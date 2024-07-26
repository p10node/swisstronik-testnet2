# Swisstronik Testnets 2 Contracts

Task 5, 6 can not be done at the moment. You can check more at: https://discord.com/channels/1131133319149518858/1134112922424053821/1266330524557906043

## 0.1 Requirement

- NodeJS `v20+`
- PNPM `npm i -g pnpm`

## 0.2 Repository

Fork this repo to your Github account, use for give link to the Github repositoryon the tasks.

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

Swisstronik contract deployed to 0x8e66CA174A109a6315da1D107398107f4ABDcF97 # copy that for "the deployed contract address"
```

Copy link to [./contracts/Hello_swtr.sol](./contracts/Hello_swtr.sol) (use your forked repo) for "the link to the Github repository"

## 2. Mint 100 ERC-20 tokens

Run it

```bash
pnpm script ./scripts/deploy-2.ts
```

Copy link to [./contracts/Token.sol](./contracts/Token.sol) (use your forked repo) for "the link to the Github repository"

```bash
# Check your output, example:

Deployed to: 0x97614cca0A8996e96A3C19A91688DA3B282a3d92 # copy that for "the deployed contract address" 
Mint Response: 0x8c1d94e267680023fb1dad530f78161eafc2745f9a2b7d4618ec4472567338b2
Transfer Response: https://explorer-evm.testnet.swisstronik.com/tx/0xcac076e36b88e285cc13845753e9c88be76f209356f26e9f1087055b61dd2a98 # copy that for "the token transaction link"
```

## 3. Mint a ERC-721 token

Run it

```bash
pnpm script ./scripts/deploy-3.ts
```

Copy link to [./contracts/ERC721.sol](./contracts/ERC721.sol) (use your forked repo) for "the link to the Github repository"

```bash
# Check your output, example:

Deployed to: 0x3f02c68201B175E0062964f8546529927be70385 # copy that for "the deployed contract address" 
Mint Response: https://explorer-evm.testnet.swisstronik.com/tx/0x4bd638bd4736ac9e4df01c2e8e9d1a0808fd176b35d361ad40073c1ac6c8fa27 # copy that for "the token transaction link"
```

## 4. Mint a PERC-20 token

Run it

```bash
pnpm script ./scripts/deploy-4.ts
```

Copy link to [./contracts/PERC20Sample.sol](./contracts/PERC20Sample.sol) (use your forked repo) for "the link to the Github repository"


```bash
# Check your output, example:

PERC20Sample was deployed to: 0xB28cdf1cd0B8E15281e6B2e40f38b15b800bA5Bc # copy that for "the deployed contract address" 
Transfer Response: https://explorer-evm.testnet.swisstronik.com/tx/0xd5a28581271ed848e30224734c5d2c6786e87963e019e55d5a5a4c167032ddec # copy that for "the token transaction link"
```

## 5. Deploy a Private NFT (can't do now)

Run it

```bash
pnpm script ./scripts/deploy-5.ts
```

```bash
# Check your output, example:


```

## 6. Deploy Proxy (can't do now)

Run it

```bash
pnpm script ./scripts/deploy-6.ts
```

Copy link to [./contracts/TokenUseProxy.sol](./contracts/TokenUseProxy.sol) (use your forked repo) for "the link to the Github repository"


```bash
# Check your output, example:

Swisstronik contract deployed to: 0x81fE466F037641BC47395917C5CA82fB9cAB27fa  # copy that for "the deployed contract address" 
```

## Community

- https://t.me/p10nodaemon
- https://t.me/p10node

Swisstronik Ambassador `pierreneter`, `p10node`

Website: https://p10node.com
Contact: pierre@p10node.com

