pacckage.json

1. react
   1. The base object model for React.js app
      1. Component<props, state> object
         1. Reusable UI with Data aka state and events
   2. Hooks
      1. useState(), useEffects(), useContext()
      2. useReducer()
2. react-dom
   1. Used to render and mount the component in Browser's DOM
3. JSX
   1. Html start-tag must have end-tag
      1. e.g. <input type="text"></input>
   2. Replacement for some of the ES 6 keyword attributes
      1. e.g. use className instead of class attribute
         1. <input type="text" className="">
         2. use htmlFor instead of for attribute
      2. use style binding
         1. standard html
            1. style="height:100px;width:400px"
         2. React.js
            1. style={{height:100px;width:400px}}
4. Components
   1. export <classname>
      1. import {<classname>} from '<FILE-PATH>'
   2. export default <classname> --> provides instance by default
      1. import <classname> from '<FILE-PATH>'

# ============================================================================

1. React Components
   1. Class Component
      1. Class derived from 'Component<props, state>' base class
         1. props, the dynamic immutable JS object that is used to pass data across components
            1. We can add any number properties in component using props
         2. state, the mutable object that represents the state of the current component aka data values used by the current component
            1. The JS object
            2. Used to pass data to HTML elements using the HTML attributes
      2. Component has following methods
         1. Must have constructor() with super(props); call
         2. setState({}, callback)
            1. Update the state of current component
         3. forceUpdate()
            1. Forcefully update the state
         4. Lifecycle method
            1. e.g. getProps()/getState()/componentDidMount(), etc
         5. render() method to render HTML elements
   2. Function Component
      1. JavaScript function that returns HTML DOM
      2. Uses Hooks to manage state
      3. function MyComponent(){return HTML}; export default MyComponent
      4. const MyComponent=()=>{ return HTML}; export default MyComponent
