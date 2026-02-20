import { createCopilotRuntimeRoute } from "entrepreneur-ai-assistant/runtime";
import { NextRequest } from "next/server";

const back_copilotkit_url = process.env.LANGGRAPH_DEPLOYMENT_URL || "http://localhost:8000/api/v1/copilotkit"
const handleRequest = createCopilotRuntimeRoute(back_copilotkit_url, "api/copilotkit");

export const POST = async (req: NextRequest) => {
  return handleRequest(req);
};
