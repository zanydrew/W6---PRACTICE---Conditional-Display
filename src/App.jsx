import { Header } from "./components/Header";
import { Scores } from "./components/Scores";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data.js"

function App() {
  return (
    <>
      <header id="header">
        <Header batchName="PNC batch 2024" />
      </header>
      
      <main className="scores-container">
          <Scores courseName="Java" results={JAVA_RESULTS} />
          <Scores courseName="HTML" results={HTML_RESULTS} />
          <Scores courseName="Python" results={PYTHON_RESULTS} />
          <Scores courseName="English" results={ENGLISH_RESULTS} />
      </main>

    </>
  );
}

export default App;
