import fetch from "node-fetch";

class Instance {
	constructor(apiKey, version) {
		this.endpoint = "https://railcartables.com";
		this.apiKey = apiKey;
		this.version = version || 1;
	}

	getOutage({ reportingMark, carNumber, levelInInches }) {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await fetch(
					`${this.endpoint}/api/v${this.version}/outage?reporting_mark=${reportingMark}&railcar_number=${carNumber}&level=${levelInInches}`,
					{
						headers: {
							key: this.apiKey,
							"Content-Type": "application/json"
						}
					}
				);
				const json = await response.json();
				resolve(json);
			} catch (error) {
				reject(error);
			}
		});
	}

	isCarCompatible({ reportingMark, carNumber }) {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await fetch(
					`${this.endpoint}/api/v${this.version}/exist?reporting_mark=${reportingMark}&railcar_number=${carNumber}`,
					{
						headers: {
							key: this.apiKey,
							"Content-Type": "application/json"
						}
					}
				);
				const json = await response.json();
				resolve(json);
			} catch (error) {
				reject(error);
			}
		});
	}
}

export default Instance;
