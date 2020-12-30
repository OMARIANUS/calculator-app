function ResultScreen(props) {
  return (
    <div className="result-screen">
      <span>{props.content}</span>
      <span>{props.operator}</span>
    </div>
  )
}

export default ResultScreen;
