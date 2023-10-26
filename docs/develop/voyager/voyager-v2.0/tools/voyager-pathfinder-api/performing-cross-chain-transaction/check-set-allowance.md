---
title: Check and Set Allowances
sidebar_position: 2
---

Prior to initiating a transaction using any web3 library (ethers.js or web3.js), users must make sure that Router's transfer or swap contract has the appropriate permissions to use the requested asset in their wallet. You can achieve this via the following piece of code:

:::note
For using native assets you can use the addresses given [here](../../../supported-chains-tokens).
:::

```ts
import { ethers, Contract } from 'ethers'

// ERC20 Contract ABI for "Approve" and "Allowance" functions
const erc20_abi = [
    {
        "name": "approve",
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "name": "allowance",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Fetch the current allowance and update if needed
const checkAndSetAllowance = async (wallet, tokenAddress, approvalAddress, amount) => {
    // Transactions with the native token don't need approval
    if (tokenAddress === ethers.constants.AddressZero) {
        return
    }

    const erc20 = new Contract(tokenAddress, erc20_abi, wallet);
    const allowance = await erc20.allowance(await wallet.getAddress(), approvalAddress);
    if (allowance.lt(amount)) {
        const approveTx = await erc20.approve(approvalAddress, amount, {gasPrice: await wallet.provider.getGasPrice()});
        try {
            await approveTx.wait();
            console.log(`Transaction mined succesfully: ${approveTx.hash}`)
        }
        catch (error) {
            console.log(`Transaction failed with error: ${error}`)
        }
    }
}

const main = async () => {

    // setting up a signer
    const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/polygon_mumbai", 80001);
    // use provider.getSigner() method to get a signer if you're using this for a UI
    const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider)
    
    await checkAndSetAllowance(
        wallet,
        "0x22bAA8b6cdd31a0C5D1035d6e72043f4Ce6aF054", // fromTokenAddress (USDT on Mumbai)
        "<address-to-approve>", // quote.allowanceTo in getQuote(params) response from step 1
        ethers.constants.MaxUint256 // amount to approve (infinite approval)
    );
}

main()
```