import assert from "assert";
import Instance from "./index.js";
import { config } from "dotenv";
config();

const API_KEY = process.env.API_KEY;

describe("Check API Key", () => {
	it("test env should have an API key", () => {
		assert(API_KEY !== "YOUR_API_KEY");
	});
});

describe("Check If Railcar Exists", async () => {
	it("should return true if the railcar exists", async () => {
		const RTDriver = new Instance(API_KEY, 1);
		const response = await RTDriver.isCarCompatible({
			reportingMark: "TILX",
			carNumber: "350123"
		});
		assert(response.exists === true);
	});
});

describe("Get Outage Data For Railcar", async () => {
	it("should return the outage for the specified level", async () => {
		const RTDriver = new Instance(API_KEY, 1);
		const response = await RTDriver.getOutage({
			reportingMark: "TILX",
			carNumber: "350123",
			levelInInches: 13
		});
		assert(response.outage === 2106);
	});
});
