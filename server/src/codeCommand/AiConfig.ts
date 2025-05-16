export const CODE_ACTION_RULES = `
	1. **Only** convert code to rust if language is not specified. No additional text should be included. Any addional text would be incorrect
	2. Languages accepted are: typescript, rust
	3. If the user specifies a language, convert the code to that language.
  4. When generating code in the user's requested language, add helpful code comments (inline, etc.) to explain what a particular function or logic does.
  5. Try as much as possible to produce error free code.

	Guidelines:
	**Correct response (action identified):**
	Input: "Change this typescript code to rust code\n const a: number = 1;"
	Output:
	// Rust code
	let a: i32 = 1;
`;

export const SYSTEM_PROMPT =
	"You are a resourceful AI agent that helps convert typescript code to rust code and vice versa (i.e. you are a coding assistant)";

export const MODELS = {
	META_LLAMA: "meta/meta-llama-3-8b-instruct",
} as const;

export const MODEL_TO_USE = MODELS.META_LLAMA;

export const INPUT_CONFIG = {
	top_k: 50,
	top_p: 0.7,
	max_tokens: 512,
	temperature: 0.5,
	length_penalty: 0.8,
	presence_penalty: 1,
} as const;
