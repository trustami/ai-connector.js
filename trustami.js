import { request } from "https";

export function makeRequest(url, token, data) {
	const postData = JSON.stringify(data);

	return new Promise((resolve, reject) => {
		const req = request({
			hostname: "api.trustami.ai",
			path: url,
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Content-Length": Buffer.byteLength(postData),
				"Authorization": "Bearer " + token
			}
		}, (res) => {
			res.setEncoding("utf8");

			let body = "";

			res.on("data", (chunk) => {
				body += chunk;
			});

			res.on("end", () => {
				try {
					const data = JSON.parse(body);

					if ("status" in data && !data.status) {
						reject(data.error);
					} else {
						resolve(data);
					}
				} catch (e) {
					reject(e);
				}
			});
		});

		req.write(postData);

		req.end();
	});
}
