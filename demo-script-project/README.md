# Demo Script Project

This project is a demonstration application that showcases a demo script with a structured flow. It includes an entry point, a demo script, and utility functions to enhance the demo experience.

## Project Structure

```
demo-script-project
├── src
│   ├── index.ts          # Entry point of the demo application
│   ├── scripts
│   │   └── demoScript.ts # Contains the demo script outline
│   └── utils
│       └── helper.ts     # Provides utility functions
├── package.json          # Configuration file for npm
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Documentation for the project
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd demo-script-project
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Compile the TypeScript files:
   ```
   npm run build
   ```

4. Run the demo application:
   ```
   npm start
   ```

## Usage Example

To run the demo, simply execute the entry point:
```typescript
import { runDemo } from './src/scripts/demoScript';

runDemo();
```

This will initiate the demo flow, including the opening voiceover, viewer experience, presenter experience, real demo, and closing. 

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.