# [@rproenza/assemplyscript-demo](https://www.npmjs.com/package/@rproenza/assemplyscript-demo)

NPM Package to create Webassembly binaries from AssemblyScript applications.

This project was created using the AssemblyScript's [Quick Start](https://www.assemblyscript.org/quick-start.html) guide to create a production ready Package with a decent framework support for development, debugging, building and publishing.

## How to use

### Development experience

#### `npm run asbuild`

Build the application.

#### `npm test`

Launches the test runner and assert the application logic proper execution.

### User experience

#### `npm i @rproenza/assemplyscript-demo`

Install package.

```typescript
import * as WasTest from '@rproenza/assemplyscript-demo';

const expressPostEndpointHandler = (request, reply) => {
    try {
        const { firstNumber, secondNumber } = request.payload;

        const wasAdditionResult = WasTest.add(firstNumber, secondNumber);

        reply.response({ addition: wasAdditionResult });
    } catch (error) {
        reply(error);
    }
};
```

Import and use the package on your code.
