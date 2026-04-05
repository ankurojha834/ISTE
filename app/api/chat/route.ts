import { generateText } from 'ai'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json() as { messages: Message[] }

    if (!messages || !Array.isArray(messages)) {
      return Response.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      )
    }

    // Convert messages to the format expected by generateText
    const modelMessages = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }))

    const systemPrompt = `You are a helpful ISTE (Indian Society for Technical Education) assistant bot. You provide information about:
- ISTE club activities (Code Nexus, Robotics Club, AI & Data Science Club, Web Development Club, Cybersecurity Club, IoT Club)
- Club leadership and members
- Upcoming events and competitions
- Hackathons and coding contests
- Mentorship programs and workshops
- How to join clubs and participate in activities

Be friendly, encouraging, and provide relevant information about ISTE's mission to promote technical education and innovation.
Keep responses concise and helpful. If asked something outside ISTE's scope, politely redirect to ISTE topics.`

    const { text } = await generateText({
      model: 'openai/gpt-4o-mini',
      system: systemPrompt,
      messages: modelMessages,
      maxOutputTokens: 200,
    })

    return Response.json({
      message: text,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}
