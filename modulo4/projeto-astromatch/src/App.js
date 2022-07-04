import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Matches from "./pages/Matches";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/matchs"} element={<Matches />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// React Context API: A deep dive with examples
// https://blog.logrocket.com/react-context-api-deep-dive-examples/

// Updating a React context from its consumer
// https://mindsers.blog/post/updating-react-context-from-consumer/#:~:text=To%20sum%20up%2C%20we%20are,it%20to%20update%20your%20context.
// https://thewebdev.info/2022/03/23/how-to-update-a-react-context-from-inside-a-child-component-2/#:~:text=a%20Child%20Component-,To%20update%20a%20React%20Context%20from%20inside%20a%20child%20component,hook%20to%20access%20the%20context.

// React Hooks: useEffect() is called twice
// https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
