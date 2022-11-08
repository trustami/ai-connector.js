import { makeRequest } from "./trustami.js";

export async function summarize(token, text, sentenceCount) {
    const response = await makeRequest("/summ", token, {
        text: text,
        sentence_count: sentenceCount
    });

    return {
        summary: response.summary
    }
};
