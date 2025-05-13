import Replicate from "replicate";

type RunPromptParams = {
	model: `${string}/${string}` | `${string}/${string}:${string}`;
	input: Record<string, string | number> & {
		prompt: string;
	};
};

const runPrompt = async (client: Replicate, params: RunPromptParams) => {
	const { model, input } = params;

	let response: string = "";

	for await (const event of client.stream(model, { input })) {
		response += event.toString();
	}

	return response;
};

export default runPrompt;