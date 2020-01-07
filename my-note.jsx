export const className = `
  top: 0;
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

  .author {
    text-transform: capitalize;
    font-size: 14px;
  }
  .author {
    margin-top: 16px;
    text-align: left;
  }
`;

export const render = () => {
  return (
    <div className="output">
      <div className="quote">
        Try committing to one day per week (for me it only works on a weekend, 
        but some people do it on Fridays) where you work in a long uninterrupted 
        block to catch up on the previous week and prepare for the next.
      </div>
      <div className="author">
        Sam Altman
      </div>
    </div>
  );
}

