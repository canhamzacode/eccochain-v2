export const CODE_ACTION_RULES = `
	1. **Only** provide the requested code no additional text should be included. Any addional text would be incorrect
  2. When generating code in the user's requested language, add helpful code comments (inline, etc.) to explain what a particular function or logic does.
  3. Try as much as possible to produce error free code.
`;

export const SYSTEM_PROMPT =
	"You are a resourceful AI agent that helps convert typescript code to rust code and vice versa (i.e. you are a coding assistant)";

export const MODELS = {
	CLAUDE: "anthropic/claude-3.7-sonnet",
} as const;

export const MODEL_TO_USE = MODELS.CLAUDE;

export const INPUT_CONFIG = {
	top_k: 50,
	top_p: 0.7,
	max_tokens: 512,
	temperature: 0.5,
	length_penalty: 0.8,
	presence_penalty: 1,
} as const;
