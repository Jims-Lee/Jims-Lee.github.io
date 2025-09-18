# CV GitHub Pages

This project is a personal CV showcase built using GitHub Pages. It utilizes Markdown files to present information in a structured and visually appealing manner.

## Project Structure

The project consists of the following main components:

- **src/assets/styles.css**: Contains the CSS styles for the CV display page, defining the layout, fonts, colors, and other visual elements.
- **src/components/CVDisplay.js**: A React component that handles the rendering of the CV content by importing and formatting Markdown files.
- **src/markdown/profile.md**: Contains personal profile information formatted in Markdown.
- **src/markdown/experience.md**: Outlines work experience, formatted for clarity and presentation.
- **src/markdown/education.md**: Details educational background using Markdown formatting.
- **index.html**: The main HTML file serving as the entry point for the GitHub Pages site, linking to CSS and JavaScript files.
- **README.md**: Documentation for the project, including setup instructions and an overview.
- **package.json**: Configuration file for npm, listing dependencies and scripts.

## Setup Instructions

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/yourusername/cv-github-pages.git
   ```

2. Navigate to the project directory:
   ```
   cd cv-github-pages
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view your CV.

## Deployment

To deploy your CV on GitHub Pages, follow these steps:

1. Build the project:
   ```
   npm run build
   ```

2. Push the `build` directory to the `gh-pages` branch of your repository.

3. Your CV will be available at `https://yourusername.github.io/cv-github-pages`.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for details.