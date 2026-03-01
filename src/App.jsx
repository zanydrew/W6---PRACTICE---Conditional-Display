import { Header } from "./components/Header";
import { Scores } from "./components/Scores";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data.js"

function App() {
  return (
    <>
      <Header batchName="PNC batch 20424" />
      {JAVA_RESULTS.map((Java, index) => <Scores key={index} firstname={Java.firstName} lastname={Java.lastName} score={Java.score}  />)}
    </>
  );
}

export default App;
