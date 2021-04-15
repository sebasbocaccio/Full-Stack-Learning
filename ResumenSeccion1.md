*## Component\
        Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * The file public/index.html doesn't contain any HTML markup that is visible to us in the browser. You can try adding some HTML into the file. However, when using React, all content that needs to be rendered is usually defined as React components.       

        const App = () => (
        <div>
        <p>Hello world</p>
        </div>
        )
        A component example.

* There are a few ways to define functions in JavaScript. Here we will use arrow functions : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

* Podes modificar el App.js para ver como se va modificando lo que se ve en pantalla 


## JSX
* It seems like React components are returning HTML markup. However, this is not the case. The layout of React components is mostly written using JSX. Although JSX looks like HTML, we are actually dealing with a way to write JavaScript. Under the hood, JSX returned by React components is compiled into JavaScript.

        JSX  is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

* It is also possible to write React as "pure JavaScript" without using JSX. Although, nobody with a sound mind would actually do so.        

* In practice, JSX is much like HTML with the distinction that with JSX you can easily embed dynamic content by writing appropriate JavaScript within curly braces.


## Multiple components

* We can define component and use them inside other components
* Writing components with React is easy, and by combining components, even a more complex application can be kept fairly maintainable. Indeed, a core philosophy of React is composing applications from many specialized reusable components.

* Another strong convention is the idea of a root component called App at the top of the component tree of the application. Nevertheless, as we will learn in part 6, there are situations where the component App is not exactly the root, but is wrapped within an appropriate utility component.


## props: passing data to components

* It is possible to pass data to components using so called props.

        const Hello = (props) => {
        return (
        <div>
        <p>
                Hello {props.name}, you are {props.age} 
        </p>
        </div>
        )
        }

        const App = () => {
        const name = 'Peter'
        const age = 10

        return (
        <div>
          <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
        </div>
        )
        }

## Some notes: 
* It is good to remember that in React it is possible and worthwhile to write console.log() commands (which print to the console) within your code.

* React component names must be capitalized        