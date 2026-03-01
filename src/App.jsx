import { Header } from "./components/Header";
import { Scores } from "./components/Scores";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data.js"

function App() {
  return (
    <>
      <Header batchName="PNC batch 2024" />
      <Scores courseName="Java" results={JAVA_RESULTS} />
      <Scores courseName="HTML" results={HTML_RESULTS} />
      <Scores courseName="Python" results={PYTHON_RESULTS} />
      <Scores courseName="English" results={ENGLISH_RESULTS} />
    </>
  );
}

export default App;
