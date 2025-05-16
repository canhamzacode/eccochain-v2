import { REPLICATE_API_KEY } from "@/utils/env";
import { getReplicateClient } from "@/replicate/replicateClient";
import runPrompt from "@/replicate/replicateLibrary";
import { prepareCodeQueryPrompt } from "@/utils/prompter";
import { CODE_ACTION_RULES, SYSTEM_PROMPT, INPUT_CONFIG, MODEL_TO_USE } from "./AiConfig";

const deriveContextFromPrompt = async (prompt: string) => {
	const replicateClient = getReplicateClient(REPLICATE_API_KEY);

	const refinedPrompt = prepareCodeQueryPrompt({
		prompt,
		rules: CODE_ACTION_RULES,
	});

	const response = await runPrompt(replicateClient, {
		input: {
			prompt: refinedPrompt,
			system_prompt: SYSTEM_PROMPT,
			...INPUT_CONFIG,
		},
		model: MODEL_TO_USE,
	});

	console.log({ replicateResponse: response });

	try {
		return response;
  } catch (error) {
    console.error(error)
		return response;
	}
};

export default deriveContextFromPrompt;