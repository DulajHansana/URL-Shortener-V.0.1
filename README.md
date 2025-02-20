# URL-Shortener-V.0.1

## Description
This is a simple URL shortener web application built using React. It allows users to shorten long URLs using the TinyURL API.

## Features
- Shorten long URLs quickly
- Copy the shortened URL with one click
- Responsive and user-friendly interface

## Technologies Used
- React.js
- TinyURL API
- HTML, CSS, JavaScript

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/DulajHansana/URL-Shortener-V.0.1.git
   ```
2. Navigate to the project directory:
   ```sh
   cd URL-Shortener-V.0.1
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage
1. Enter the long URL in the input field.
2. Click the "Shorten" button to generate a shortened URL.
3. Copy the shortened URL using the "Copy" button.

## API Integration
This project uses **TinyURL API** to shorten URLs. The API endpoint used:

```js
const shortenUrl = async (longUrl) => {
    const response = await fetch('https://api.tinyurl.com/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({ url: longUrl })
    });
    
    const data = await response.json();
    return data.data.tiny_url;
};
```

> **Note:** Replace `YOUR_API_KEY` with your actual TinyURL API key.

## Deployment
This application is deployed on **Vercel**: [URL Shortener](https://urlshortnerv1.vercel.app)

## License
This project is licensed under the Apache-2.0 License.
