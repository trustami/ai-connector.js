import { makeRequest } from "./trustami.js";

export async function detectSentiment(token, text) {
	const response = await makeRequest("/sent", token, {
		text: text
	});

	return {
		polarity: response.polarity,
		score: response.score
	}
}
