function Generate(props) {
  return (
    <div className="generator">
      <input
        className="write-top"
        onChange={(e) => props.setTop(e.target.value)}
      />
      <input
        className="write-bottom"
        onChange={(e) => props.setBot(e.target.value)}
      />
      <button className="generate-btn" onClick={props.handleRandom}>
        RANDOM IMAGE
      </button>
    </div>
  );
}
export default Generate;
