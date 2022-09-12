# RailcarTables for Node.js

[![install size](https://packagephobia.com/badge?p=railcartables)](https://packagephobia.com/result?p=railcartables)![npm](https://img.shields.io/npm/dw/railcartables)![API Status](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Frailcartables.com%2F)

The RailcarTables Node library provides convenient access to the RailcarTables API from applications written in server-side JavaScript.

## Requirements

Node 8, 10 or higher.

## Installation

Install the package with:

```sh
npm install railcartables --save
# or
yarn add railcartables
```

## Usage

The package needs to be configured with your account's API key, which is
available in the [RailcarTables Dashboard](https://railcartables.com/app/dashboard).

Using `async`/`await`:

```js
import RailcarTables from "railcartables";

(async () => {
	const RCT = new RailcarTables("YOUR_API_KEY", 1);
	const gaugeOutage = await RCT.getOutage({
		reportingMark: "TILX",
		carNumber: "350123",
		levelInInches: 85
	});

	console.log(gaugeOutage);
})();
```
