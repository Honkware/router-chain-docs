---
title: Step 3) Configure and Run an Orchestrator Instance
sidebar_position: 3
---
If you have followed the preceeding steps properly, you should already see an orchestrator config created at `~/.router-orchestrator/config.json`. Now, let's configure and run an orchestrator instance.

<!-- Before proceeding with this step, make sure that you are running a validator. If note, follow [this guide](./setup-a-validator-account) to become a validator. -->

<details>
<summary><b>Step 3.1) Create a new wallet for the orchestrator</b></summary>

```bash
routerd keys add my-orchestrator-key --chain-id router_9601-1 --keyring-backend file
```

The aforementioned command will create a new wallet with name `my-orchestrator-key` and will ask you to set a password. 

:::caution
Remember the password used or store it in a safe place. 
:::

```bash
# example output

- name: my-orchestrator-key
  type: local
  address: router13cffzsfgjklfq17poq2ifm0xn426ing3bqk5q1
  pubkey: '{"@type":"/routerprotocol.routerchain.crypto.ethsecp256k1.PubKey",
  mnemonic: ""
  
**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

chocolate wife later depart same window health ocean happy dog formula pen sun retail tank ship board awesome couch laptop city bottle curtain bowl
```
:::tip
The mnemonic phrase is better backed up on a physical paper, storing it in cloud storage may compromise the validator later.
:::

:::tip
Remember the address starting from `router`, this is the address of your Router chain orchestrator account.
:::


</details>

<details>
<summary><b>Step 3.2) Obtain ROUTE token</b></summary>

Now, add funds to your orchestrator wallet as it will be used to pay for the gas fees:

```bash
routerd tx bank send <validator-node-key-name> $(routerd keys show my-orchestrator-key -a --keyring-backend file) 1000000000000000000route --from my-validator-key --chain-id router_9601-1 --fees 1000000000000000route --keyring-backend  file
```

After a few minutes, you can verify the deposit by querying the account balance using the following command:
```bash
routerd query bank balances $(routerd keys show my-orchestrator-key -a --keyring-backend file) --chain-id router_9601-1 --keyring-backend file
```

</details>

<details>
<summary><b>Step 3.3) Configure the orchestrator keys</b></summary>

Add the relevant keys in `.router-orchestrator/config.json`:

```json
{
    "chains": [
        {
            "chainId": "<CHAIN_ID>",
            "chainType": "<CHAIN_TYPE>",
            "chainName": "<CHAIN_NAME>",
            "chainRpc": "<CHAIN_RPC>",
            "blocksToSearch": 1000,
            "blockTime": "10s"
        }
    ],
    "globalConfig": {
        "networkType": "<NETWORK_TYPE>",
        "dbPath": "processedblock.db",
        "ethPrivateKey": "<ETH_PRIVATE_KEY>",
        "cosmosPrivateKey": "<COSMOS_PRIVATE_KEY>",
        "batchSize": 100,
        "batchWaitTime": 20
    }
}
```

To g
routerd keys unsafe-export-eth-key my-orchestrator-key --keyring-backend file

- `chains` is an array of objects including info about all the chains you want to listen to as an orchestrator. This needs to be done only for external chains i.e. Router chain will not be part of the orchestrator chains config. For each chain, you need to provide:
    - `chainId` - the chain id of the network
    - `chainType` - the type of chain, possible values are:
        `CHAIN_TYPE_EVM`,
        `CHAIN_TYPE_COSMOS`,
        `CHAIN_TYPE_POLKADOT`,
        `CHAIN_TYPE_SOLANO`,
        `CHAIN_TYPE_NEAR`
    - `chainName` - the name of the chain
    - `chainRpc` - the RPC endpoint of the chain


- `globalConfig` includes global configuration details like:
    - `NETWORK_TYPE` - `testnet`
    - `ETH_PRIVATE_KEY` - the private key of the wallet you created for the validator on EVM chains (not necessary to have have funds in this wallet, it will be used just for signing messages)
    - `COSMOS_PRIVATE_KEY` - the private key of the wallet you created for the orchestrator


To obtain the orchestrator's `COSMOS_PRIVATE_KEY`, run 
```bash
routerd keys unsafe-export-eth-key my-orchestrator-key --keyring-backend file
```

### For listening NEAR

To access the data provided by [NEAR Lake](/tools/realtime#near-lake-indexer) you need to provide valid AWS credentials in order to be charged by the AWS for the S3 usage.

 :::info AWS-cli

We will require AWS CLI to access to query S3. If you don't have AWS CLI, please follow these steps. [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

:::

### AWS S3 Credentials

To be able to get objects from the AWS S3 bucket you need to provide the AWS credentials.

AWS default profile configuration with aws configure looks similar to the following:

```
~/.aws/credentials
```

```
[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

[AWS docs: Configuration and credential file settings](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

#### Environment variables

Alternatively, you can provide your AWS credentials via environment variables with constant names:

```
$ export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
$ AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
$ AWS_DEFAULT_REGION=eu-central-1
```

Sample `.router-orchestrator/config.json`:
```json
{
    "chains": [
        {
            "chainId": "80001",
            "chainType": " CHAIN_TYPE_EVM",
            "chainName": "Mumbai",
            "chainRpc": "<RPC_URL>",
            "blocksToSearch": 1000,
            "blockTime": "10s"
        },
        {
            "chainId": "43113",
            "chainType": " CHAIN_TYPE_EVM",
            "chainName": "Fuji",
            "chainRpc": "<RPC_URL>",
            "blocksToSearch": 1000,
            "blockTime": "10s"
        },
        {
            "chainId": "nearTestnet",
            "chainType": " CHAIN_TYPE_NEAR",
            "chainName": "nearTestnet",
            "chainRpc": "<RPC_URL>",
            "blocksToSearch": 1000,
            "blockTime": "2s"
        }
    ],
    "globalConfig": {
        "mQEndpoint": "amqp://guest:guest@localhost",
        "networkType": "testnet",
        "dbPath": "processedblock.db",
        "ethPrivateKey": "<PRIVATE_KEY>",
        "cosmosPrivateKey": "<PRIVATE_KEY>",
        "batchSize": 100,
        "batchWaitTime": 20
    }
}
```

</details>


<details>
<summary><b>Step 3.4) Map the orchestrator with your validator</b></summary>

Every orchestrator needs to be mapped with a validator. This is done by sending a transaction on the chain to map an orchestrator with a validator.

```bash
routerd tx attestation set-orchestrator-address $(routerd keys show my-orchestrator-key -a --keyring-backend file) <EVM-ADDRESS-FOR-SIGNING-TXNS> --from my-validator-key --chain-id router_9601-1 --fees 1000000000000000route --keyring-backend file
```

`EVM-KEY-FOR-SIGNING-TXNS` is the public address corresponding to the `ETH_PRIVATE_KEY` used in the orchestrator config in the previous step.

</details>

<details>
<summary><b>Step 3.5) Start the orchestrator and validator</b></summary>

```bash
sudo systemctl daemon-reload
sudo systemctl restart cosmovisor.service
sudo systemctl restart orchestrator.service
```

After executing the aforementioned commands, your orchestrator instance will start running. You can check the orchestrator and validator logs to see if everything is working fine.

```bash
sudo journalctl -u orchestrator.service -f
sudo journalctl -u cosmovisor.service -f
```

</details>
