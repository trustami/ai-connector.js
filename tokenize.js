import { makeRequest } from "./trustami.js";

export async function tokenize(token, text, advanced = true, splitCamelCase = true) {
    const response = await makeRequest("/tokn", token, {
        text: text,
        advanced: advanced,
        splitCamelCase: splitCamelCase
    });

    return {
        sentences: response.sentences
    }
};
