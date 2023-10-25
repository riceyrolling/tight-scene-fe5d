// router.js
// Import the required route handlers.
import { getTodo } from "./routes/todoRoute.js";
import { getMedia } from "./routes/mediaRoute.js";

// Function to route incoming HTTP requests based on the URL path.
// Parameters:
// - env: An object containing bindings (like KV namespaces and Durable Objects) associated with the Worker.
// - request: The incoming HTTP request object.
export async function routeRequest(env, request) {
    // Parse the URL to extract the pathname.
    const url = new URL(request.url);
    const path = url.pathname.split("/").slice(1);

    // Route the request based on the first segment of the path.
    switch (path[0]) {
        case "todo":
            // Handle '/todo' route.
            return getTodo();
        case "media":
            // Handle '/media' route.
            return getMedia();
        default:
            // Default case, return a 404 not found response.
            return new Response("Not found", { status: 404 });
    }
}