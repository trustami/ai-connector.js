# trustami-ai

This repository aims to provide a simple and easy to use connector to the Trustami.AI API.

### Installation

```bash
npm i trustami-ai
```

### Usage

```javascript
import { detectLanguage } from "trustami-ai";

const result = await detectLanguage("YOUR_TOKEN_HERE", "This is a test text. It is used to test the Trustami.AI API.");

console.log(`The text language is "${result.language}".`); // The text language is "en".
```
