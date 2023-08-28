import { makeRequest } from "./trustami.js";

export async function extractKeywords(token, text, start, end, topN, useMMR, diversity) {
    const response = await makeRequest("/keyw", token, {
        text: text,
        start: start,
        end: end,
        top_n: topN,
        use_mmr: useMMR,
        diversity: diversity
    });

    return {
        keywords: response.keywords
    }
};
