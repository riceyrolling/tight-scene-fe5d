# Cloudflare Workers: A Comprehensive Guide 🚀

This repository contains the example code for the Medium article: "[The Ultimate Guide to Cloudflare Workers](#)". In this article, we explore the capabilities of Cloudflare Workers, an edge computing service that allows you to run your code closer to the user.

TThe application has two routes:
- `/todo` - returns a JSON todo list from an API source.
- `/media` - returns a random image from an API source.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Edge Computing with Cloudflare Workers
- Routing HTTP requests
- Fetching media from external APIs
- Cron-triggered events
- Enhanced security and low-latency

## Prerequisites

- Node.js
- npm
- Cloudflare account
- [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/install-update)

## Getting Started

1. **Clone the Repository**

    ```bash
    git clone https://github.com/riceyrolling/tight-scene-fe5d.git
    ```

2. **Navigate to the directory**

    ```bash
    cd tight-scene-fe5d
    ```

3. **Install Dependencies**

    ```bash
    npm install 
    ```

4. **Authenticate Wrangler**

    ```bash
    wrangler login
    ```

5. **Deploy to Cloudflare**

    ```bash
    wrangler deploy
    ```

## File Structure

- `index.js`: Entry point for the worker code.
- `router.js`: Contains routing logic for incoming HTTP requests.
- `routes/`: Directory containing individual route handlers.
  - `todoRoute.js`: Route handler for `/todo` path.
  - `mediaRoute.js`: Route handler for `/media` path.

## Usage

Make an HTTP request to your deployed Cloudflare Worker:

- To get a TODO item:

    ```
    GET https://your-cloudflare-worker.your-subdomain.workers.dev/todo
    ```

- To get a random image:

    ```
    GET https://your-cloudflare-worker.your-subdomain.workers.dev/media
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
