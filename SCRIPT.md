Let's start actually writing some tests with react-testing-library.

First we need to install react testing library.

We need to run the following command in the terminal

```bash
yarn add -D @testing-library/react
```

Now that we have react-testing-library as a devDependency, we can write tests for our react components.

Let's look at app.js, As you can see here, we have a react component that is declared
as App, and it renders some text that says `Hello this is my application`

Let's write a test for App

First we import react just like in any other react component file.

```js
import React from "react"
```

Then we import React-testing-library's render method

```js
import { render } from "@testing-library/react"
```

Then we import App.

```js
import App from "../app"
```

Now, since we're using jest, we use the `test` function.

```js
test("renders", () => {
  render(<App />)
})
```

Now, we can run our test cases, since this project was built with create-react-app,
we can run `yarn test` which run `react-scripts test`

You can see that app.test.js passes with flying colors!

The main objective with this test is that we have the base scenarios covered, where our components render properly
when they stand on their own.

Let's update app.js to render a different message based on props that are provided.

We have the desire to add the ability to change the word hello, so users of our component could instead say something like
Hi or Greetings.

```js
function App(props) {
  const { metadata } = props
  return <div>{metadata.greeting} this is my application</div>
}
```

Now you can see that our test is failing because we failed to provide the metadata object.

Instead of providing the metadata object in our test, lets instead add defaultProps to our App component.

```js
App.defaultProps = {
  metadata: {
    greeting: "Hello"
  }
}
```

Now when we render our component in our test case, it passes with flying colors again!
