// mediaRoute.js
// Function to get a random image.
export async function getMedia() {
    // Generate a random image ID and fetch the image from an external service.
    const randomImageId = Math.floor(Math.random() * (300 - 1 + 1) + 1);
    const mediaPlaceHolder= await fetch(`https://picsum.photos/id/${randomImageId}/200/300`);

    // Return the fetched random image response.
    return mediaPlaceHolder;
}