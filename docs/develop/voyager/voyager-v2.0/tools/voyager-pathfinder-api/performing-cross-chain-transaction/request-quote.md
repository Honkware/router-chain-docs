---
title: Request a Quote
sidebar_position: 1
---

If all the required parameters are valid, the Pathfinder API will always return a path.
For transferring native assets, just use the native token addresses given [here](../../../supported-chains-tokens).

:::info
You can find the API information [**here**](../../../../../../api/?v=PATHFINDER).
:::

```jsx
import axios from "axios"

const PATH_FINDER_API_URL = "https://api.pf.testnet.routerprotocol.com/api"

const params = {
    'fromTokenAddress': '0x22bAA8b6cdd31a0C5D1035d6e72043f4Ce6aF054',
    'toTokenAddress': '0xb452b513552aa0B57c4b1C9372eFEa78024e5936',
    'amount': '44000000000000', // source amount
    'fromTokenChainId': "80001", // Mumbai
    'toTokenChainId': "43113", // Fuji
    'widgetId': 0, // (Optional) - For any partnership, get your unique widget id by contacting us on Telegram
}

// calling the pathfinder api using axios
const getQuote = async (params) => {
    const endpoint = "v2/quote"
    const quoteUrl = `${PATH_FINDER_API_URL}/${endpoint}`

    console.log(quoteUrl)

    try {
        const res = await axios.get(quoteUrl, { params })
        return res.data;
    } catch (e) {
        console.error(`Fetching quote data from pathfinder: ${e}`)
    }    
}

```

:::info
Important Note: 
To play around with the API, you can use the Widget ID given in the example above. But for use in any product/protocol, you will be assigned a unique Widget ID. To get your Widget ID, please contact us on [Telegram](https://t.me/Add_ith).
:::