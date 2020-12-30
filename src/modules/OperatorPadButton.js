function OperatorPadButton(props) {
  function padBtnHandleClick() {
    props.auxHandler(props.value);
  }

  return <button onClick={padBtnHandleClick}>{props.value}</button>
}

export default OperatorPadButton;
