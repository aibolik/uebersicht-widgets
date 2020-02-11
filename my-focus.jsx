export const className = `
  bottom: 0;
  left: 0;

  color: #fff;
  font-family: Helvetica Neue;

  .output {
    padding: 16px;
    width: 500px;
    font-size: 20px;
    // font-weight: lighter;
	  font-smoothing: antialiased;
  }

  .list {
    list-style: none;
  }

  .done {
    text-decoration: line-through;
  }
`;

export const render = () => {
  return (
    <div className="output">
      <h2>My focus(10-14.02)</h2>
      <ul className="list">
        <li>
          <h3>Cookbook:</h3>
          <ul className="list">
            <li>
              Next release - v9.0.0
            </li>
            <li>
              Dark mode clarification
            </li>
          </ul>
        </li>
        <li>
          <h3>B2B Website:</h3>
          <ul className="list">
          <li>
              Content models for Blog
            </li>
            <li>
              Get to know designers and editors for blog
            </li>
            <li>
              Kick-off development
            </li>
          </ul>
        </li>
        <li>
          <h3>Indeed Zendesk Automations</h3>
          <ul className="list">
            <li>
              Estimations on tickets
            </li>
          </ul>
        </li>
        <li>
          <h3>Hiring</h3>
          <ul className="list">
            <li>
              Get to know hiring process for engineers(in web teams)
            </li>
            <li>
              Prepare for Interview - Get to know the candidate
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

