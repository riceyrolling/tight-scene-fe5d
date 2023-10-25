// index.js

// Import the `routeRequest` function from "router.js".
// This function is responsible for handling and routing incoming HTTP requests.
import { routeRequest } from "./router.js";

// Uncomment this line if you're planning to use scheduled tasks.
// import { scheduledTasks } from "./scheduledTasks.js";

// The main object exported that defines how the Cloudflare Worker will behave.
export default {

    // The `fetch` handler is triggered on incoming HTTP requests.
    // It receives three parameters:
    // - request: The incoming HTTP request object.
    // - env: An object containing the bindings (like KV namespaces and Durable Objects) associated with the Worker.
    // - ctx: An object containing the context associated with the Worker.
    async fetch(request, env, ctx) {
        // Call `routeRequest` to handle the incoming request and return a Response object.
        return routeRequest(env, request);
    },

    // Uncomment this code block if you want to use scheduled tasks.
    /*
    // The `scheduled` handler is triggered by a ScheduledEvent.
    // Parameters:
    // - event: The event object which contains information about the scheduled event.
    //     - event.cron: The value of the Cron Trigger that started the event.
    //     - event.type: The type of event, which will always return "scheduled".
    //     - event.scheduledTime: The scheduled execution time in milliseconds since January 1, 1970, UTC.
    // - env: An object containing bindings like KV namespaces and Durable Objects associated with the Worker.
    // - ctx: An object containing the context. It currently includes the `waitUntil` function.
    async scheduled(event, env, ctx) {
        // The `waitUntil` function ensures all tasks in `doSomeTaskOnASchedule` complete before the Worker stops.
        ctx.waitUntil(doSomeTaskOnASchedule());
    }
    */
};