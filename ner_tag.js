import { makeRequest } from "./trustami.js";

export async function nerTag(token, text, language = "german") {
    const response = await makeRequest("/nert", token, {
        text: text,
        language: language
    });

    return {
        entities: response.recognized_named_entites
    }
};
