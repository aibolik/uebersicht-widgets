export const className = `
  left: 0;
  bottom: 0;

  color: #fff;
  font-family: Helvetica Neue;

  .output {
    padding: 16px;
    width: 500px;
    font-size: 14px;
	  font-smoothing: antialiased;
  }

  .title {
    font-size: 16px;

    span {
      font-size: 12px;
    }
  }
`;

export const render = () => {
  return (
    <div className="output">
      <h1 className="title">Stand settings<span> (top-to-bottom):</span></h1>
      Sitting on floor/couch: 75/90/45&#176; <br />
      Sitting at table: 30/-30/30&#176; <br />
      Sitting on floor with 2nd screen: 15/-45/30&#176; <br />
    </div>
  );
}

