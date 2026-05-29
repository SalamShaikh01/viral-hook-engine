import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
Generate:
1. 5 viral hooks
2. A short viral video script
3. CTA
4. Caption
5. Hashtags

Topic: ${body.topic}
Platform: ${body.platform}
`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    return Response.json({
      result: completion.choices[0]?.message?.content,
    });

  } catch (error: any) {
    console.log("GROQ ERROR:", error);

    return Response.json(
      {
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}