import {
  CopilotRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
  OpenAIAdapter,
} from "@copilotkit/runtime";
import OpenAI from "openai";

export function createCopilotRuntimeRoute(langGraphUrl: string, endpoint = "/api/v1/copilotkit") {
    // 1. Create OpenAI client and adapter
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY || "dummy-key",
    });
    const serviceAdapter = new OpenAIAdapter({ openai });

    // 2. Create the CopilotRuntime instance and connect to our FastAPI backend
    const runtime = new CopilotRuntime({
        remoteEndpoints: [
            {
            url: langGraphUrl,
            },
        ],
    });

    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
      runtime,
      serviceAdapter,
      endpoint: endpoint,
    });
    return handleRequest;
}
