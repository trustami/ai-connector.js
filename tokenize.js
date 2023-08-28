import { makeRequest } from "./trustami.js";

export async function tokenize(token, text, advanced, splitCamelCase) {
    const response = await makeRequest("/tokn", token, {
        text: text,
        advanced: advanced,
        splitCamelCase: splitCamelCase
    });

    return {
        sentences: response.sentences
    }
};
