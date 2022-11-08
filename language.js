import { makeRequest } from "./trustami.js";

export async function detectLanguage(token, text) {
    const response = await makeRequest("/lang", token, {
        text: text
    });

    return {
        language: response.lang
    }
};
