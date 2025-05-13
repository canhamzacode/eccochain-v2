import type { Request, Response } from "express";
import getCodeFromPrompt from "@/codeCommand/AiPrompter";

export const translateCode = async (req: Request, res: Response) => {
	try {
		const { code, language } = req.body;

		const text = `Change this code\n ${code}\n to ${language}`;

		const aiResponse = await getCodeFromPrompt(text);

		res
			.status(200)
			.json({ message: "code translated successfully!", response: aiResponse });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Intrenal Server Error" });
	}
};