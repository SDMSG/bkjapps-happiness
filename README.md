# Birthday Scrapbook

Welcome to the Birthday Scrapbook project! This website is designed to celebrate a special birthday with a cute, romantic, and minimalist scrapbook theme. It features multiple pages, animations, and a music booth that connects to Spotify for an engaging experience.

## Project Structure

The project is organized as follows:

```
birthday-scrapbook
├── app
│   ├── page.tsx          # Main entry point for the website
│   ├── memories
│   │   └── page.tsx      # Memories page showcasing photos and messages
│   ├── playlist
│   │   └── page.tsx      # Playlist page connecting to Spotify
│   ├── letter
│   │   └── page.tsx      # Letter page for heartfelt messages
│   ├── layout.tsx         # Overall layout including header and footer
│   └── globals.css        # Global CSS styles for the website
├── components
│   ├── scrapbook-layout.tsx # Scrapbook-style layout component
│   ├── navigation.tsx      # Navigation component for page transitions
│   ├── animation-wrapper.tsx # Component for wrapping content with animations
│   └── music-booth.tsx     # Music booth component integrating with Spotify
├── lib
│   └── spotify.ts          # Functions and configurations for Spotify API
├── public                  # Directory for static assets (images, fonts, etc.)
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
├── next.config.ts          # Next.js configuration settings
└── README.md               # Project documentation
```

## Features

- **Multiple Pages**: Navigate through different sections including Memories, Playlist, and Letter.
- **Animations**: Enjoy smooth transitions and animations throughout the website.
- **Music Booth**: Connects to Spotify to play curated songs for the celebration.
- **Minimalist Design**: A cute and romantic scrapbook layout that enhances the user experience.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd birthday-scrapbook
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the website in action!

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and suggestions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.`