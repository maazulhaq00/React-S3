import Employee from "./components/Employee";
import CounterPage from "./views/CounterPage";
import DisplayUsers from "./views/DisplayUsers";

function App() {
  return (
    <>

      {/* <CounterPage />
     */}
      {/* <DisplayUsers /> */}
      <Employee name="Muhammad Ali" email="ma@gmail.com" contact="12345"
        remarks={
          <>
            <h4>Employee of the Month</h4>
            <p>Good Contribution in team</p>
          </>
        }
      />

      <Employee name="Muhammad Anas" email="anas@gmail.com" contact="12345"
        remarks={
          <>
            <h4>Need Improvement</h4>
          </>}
      >

        <ul>
          <li>Html</li>
          <li>Css</li>
          <li>Js</li>
          <li>React</li>
        </ul>


      </Employee>

    </>
  );
}

export default App;