# @omnisat/lasereyes
![Laser Eyes](./lasereyes.png)

# Laser Eyes 
## React Hooks for Bitcoin

Laser Eyes is a collection of React Hooks containing everything you need to start working with Bitcoin.
Laser Eyes makes it easy to "Connect" interface with Bitcoin, Inscriptions, balance information, interact with BRC-20s, and more.

### Install

```yarn add @omnisat/lasereyes```

### Usage Overview
```javascript

import { LaserEyesProvider, createConfig } from '@omnisat/lasereyes'

const config = createConfig({
 ...
})
 
function App() {
  return (
    <LaserEyesProvider config={config}>
      <Profile />
    </LaserEyesProvider>
  )
}
```

# Usage
## how to

The following hooks support typed inference:

### Read Methods

connect
```lasereyes.connect()```

Get addresses of current account
```lasereyes.requestAccounts()```

Returns testnet or mainnet
```lasereyes.getNetwork()```

Get public key of account
```lasereyes.getPublicKey()```

Get Balance of current account
```lasereyes.getBalance()```

Get All inscriptions
```lasereyes.getInscriptions()```

Get All Tokens
```lasereyes.getAllBRC20Tokens()```

### Write Methods

Send Bitcoin
```lasereyes.sendBTC(toPK, btc_in_sats, ...)```

Transferable: The amount has been inscribed into one or more TRANSFER inscriptions (can be transferred immediately).
Available: The amount that is available as a part of a balance (including both minted and received) but not transferable yet.
To spend an available amount, you must first inscribe a certain amount into a TRANSFER inscription.

The transfer Amount can be calculated by the sum of the chosen amounts of TRANSFER inscriptions.
If you don’t have enough transferable inscriptions, you will need to inscribe them first.

Once a number of TRANSFER inscriptions are chosen, proceed to send them by asserting an address

sign the tx to send.

Sign a message
```lasereyes.signMessage(...)```

Sign a single PSBT
```lasereyes.signPsbt(...)```

Sign an array of PSBT
```lasereyes.signPsbts(...)```

