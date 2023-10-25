// todoRoute.js
// Function to get a sample TODO item from an API.
export async function getTodo() {
    // Fetch a sample TODO item from an external JSON API.
    const postPlaceHolder = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    // Parse and return the JSON response with appropriate headers.
    return new Response(JSON.stringify(await postPlaceHolder.json()), {
        headers: { "Content-Type": "application/json" },
    });
}