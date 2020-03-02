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
      <h2>My focus(24-28.02)</h2>
      <ul className="list">
        <li>
          <h3>Cookbook:</h3>
          <ul className="list">
            <li className="done">
              Create MR in portal to address v9.0.0
            </li>
            <li>
              styled-system object breakpoints
            </li>
            <li>
              Pipeline fix for stg docs release
            </li>
            <li>
              read: shouldForwardProp support(https://github.com/styled-components/styled-components/pull/3006)
            </li>
          </ul>
        </li>
        <li>
          <h3>Quisine:</h3>
          <ul className="list">
            <li>
              Header fix
            </li>
            <li>
              Article template
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

