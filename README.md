# AEX SDK

[![npm version](https://badge.fury.io/js/aex-sdk.svg)](https://www.npmjs.com/package/aex-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%23007ACC.svg)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

A comprehensive TypeScript SDK designed to interact with various cryptocurrency exchange APIs, providing both client-side components (built with React) and server-side utilities.

## Features

* **Multi-Exchange Support:** Currently supports Binance, Bitget, Bybit, and MEXC APIs.
* **Modular Design:** Offers subroutes for importing specific functionalities:
    * `aex-sdk`: Main entry point for core utilities.
    * `aex-sdk/client`: Client-side React components.
    * `aex-sdk/client/components`: Specific React UI components.
    * `aex-sdk/server`: Server-side libraries and utilities.
    * `aex-sdk/server/libraries/binance`: Dedicated functions for interacting with the Binance API.
* **TypeScript First:** Built with TypeScript for excellent type safety and developer experience.
* **React Components:** Includes pre-built React UI components for easy integration into React applications.
* **Server-Side Libraries:** Provides robust server-side functions for interacting with exchange APIs.
* **Promise-Based:** Utilizes Promises for asynchronous operations.
* **Error Handling:** Includes basic error handling for API requests.
* **Environment Variable Configuration:** Leverages `dotenv` for managing API keys and secrets.

## Installation

You can install the AEX SDK using npm:

```bash
npm install aex-sdk
```
or yarn:

```bash
yarn add aex-sdk
```
Usage
Here are some basic usage examples:

Importing the main SDK:

```TypeScript
import { /* someCoreFunction */ } from 'aex-sdk';
```
Importing React components:

```TypeScript
import { MyButton } from 'aex-sdk/client/components';
function App() {
  return <MyButton label="Click Me" />;
}
```
Importing server-side Binance utilities:

```TypeScript
import { getBinanceTicker } from 'aex-sdk/server/libraries/binance';

async function fetchTicker() {
  const ticker = await getBinanceTicker('BTCUSDT');
  console.log(ticker);
}

fetchTicker();
```
# Server-Side Exchange Interaction:

The server-side libraries provide functions to interact with the APIs of supported exchanges. You'll need to configure your API keys and secrets using .env files in your server environment.

## .env (example for Binance)
```
BINANCE_API_KEY=YOUR_BINANCE_API_KEY
BINANCE_API_SECRET=YOUR_BINANCE_API_SECRET
BINANCE_TESTNET_API_KEY=YOUR_BINANCE_TESTNET_API_KEY
BINANCE_TESTNET_API_SECRET=YOUR_BINANCE_TESTNET_API_SECRET
```
Refer to the specific files in the src/server/libraries directory for available functions for each exchange (Binance, Bitget, Bybit, MEXC).

## .env sample
```
BYBIT_API_KEY=
BYBIT_API_SECRET=

BYBIT_USE_TESTNET=true
BYBIT_TESTNET_API_KEY=
BYBIT_TESTNET_API_SECRET=

BINANCE_API_KEY=
BINANCE_API_SECRET=

BINANCE_USE_TESTNET=true
BINANCE_TESTNET_API_KEY=
BINANCE_TESTNET_API_SECRET=

MEXC_API_KEY=
MEXC_API_SECRET=

BITGET_API_KEY=
BITGET_API_SECRET=
BITGET_API_PASS=

RECV_WINDOW=20000
```

# Documentation
Detailed documentation for each module and component will be available soon. In the meantime, please refer to the TypeScript definitions (.d.ts files) for API details and function signatures.

# Contributing
Contributions are welcome! Please read the CONTRIBUTING.md file for guidelines on how to contribute to this project.

# License
MIT