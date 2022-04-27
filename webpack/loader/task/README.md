# Webpack Loaders configuration DEMO

To execute example, please first execute `npm install` within this folder.

For development mode, execute `npm start` or `npm run start`

For production mode, execute `npm run build`

Watch the generated file within the dist folder how it change with the different modes.

## The exercise

- Comment in the image import within the src/index.js file to add the image to the dependency graph (run the build to watch the output)
  - install "file-loader" as a dev-dependency
  - test for different file types as loader criteria `/\.(png|jpe?g|gif)$/`
  - configure the 'file-loader' in a way (via options) to move all referenced images to an image-directory within your output directory
