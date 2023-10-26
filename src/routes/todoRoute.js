// todoRoute.js
// Function to get a sample TODO item from an API.
// Parameters:
// - request: The incoming HTTP request object.
// - ctx: An object containing the context associated with the Worker.
export async function getTodo(request, ctx) {
    // Initialize the custom cache.
    const cache = await caches.open('custom:cache');
    
    // Check for a cache hit.
    let response = await cache.match(request);

    // If response not found in cache, fetch from server
    if (!response) {
        console.log("Cache Miss!")
        response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        // Cache the API response for 30 seconds
        // Note that Cache API will not work on workers.dev domains.
        // Use a custom route on your domain or test with wrangler dev.
        const headers = { "Cache-Control": "s-maxage=30" };
        response = new Response(response.body, { ...response, headers });
        ctx.waitUntil(cache.put(request, response.clone()));
    } else {
        console.log("Cache Hit!")
    }

    // Parse and return the JSON response with appropriate headers.
    return new Response(JSON.stringify(await response.json()), {
        headers: { "Content-Type": "application/json" },
    });
}