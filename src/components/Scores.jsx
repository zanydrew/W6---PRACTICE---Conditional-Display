

export function Scores({courseName}, {firstName, lastName,score}) {
    return (
        <main className="scores-container">
        <div class="scores">
                <h1>{courseName}</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{score}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    )
}