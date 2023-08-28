import { makeRequest } from "./trustami.js";

export async function extractKeywords(token, text, start = 1, end = 2, topN = 5, useMMR = true, diversity = 0) {
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
