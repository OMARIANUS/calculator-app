function NumPadButton(props) {
  function localHandleClick() {
    props.auxHandler(props.value);
  }

  return <button onClick={localHandleClick}>{props.value}</button>
}

export default NumPadButton;
