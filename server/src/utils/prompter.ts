export type PrepareCodeQueryPromptParams = {
	prompt: string;
	rules: string;
};

export function prepareCodeQueryPrompt(
	params: PrepareCodeQueryPromptParams
): string {
	const { prompt, rules } = params;

	const refinedPrompt = `
    Based on the user's prompt: "${prompt}", produce a well structed and error free code 
        
    Rules:
    ${rules}
  `;

	return refinedPrompt.trim();
}
