import NumPadButton from './NumPadButton.js';
import OperatorPadButton from './OperatorPadButton.js';

class CalcPad extends React.Component {
  constructor() {
    super();
    this.operatorButtonHandleClick = this.operatorButtonHandleClick.bind(this);
  }

  operatorButtonHandleClick(value) {
    if (value === '=' && !this.props.isEqualBtnEnabled)
      return;

    else
      this.props.operatorStateHandler(value);
  }

  render() {
    return (
      <div className="calc-pad">
        <div>
          <NumPadButton key={0} value={7} auxHandler={this.props.numStateHandler} />
          <NumPadButton key={1} value={8} auxHandler={this.props.numStateHandler} />
          <NumPadButton key={2} value={9} auxHandler={this.props.numStateHandler} />
          <OperatorPadButton key={3} value="+" auxHandler={this.operatorButtonHandleClick} />
        </div>

        <div>
          <NumPadButton key={3} value={4} auxHandler={this.props.numStateHandler} />
          <NumPadButton key={4} value={5} auxHandler={this.props.numStateHandler} />
          <NumPadButton key={5} value={6} auxHandler={this.props.numStateHandler} />
          <OperatorPadButton key={6} value="-" auxHandler={this.operatorButtonHandleClick} />
        </div>

        <div>
          <NumPadButton key={7} value={1} auxHandler={this.props.numStateHandler} />
          <NumPadButton key={8} value={2} auxHandler={this.props.numStateHandler} />
          <NumPadButton key={9} value={3} auxHandler={this.props.numStateHandler} />
          <OperatorPadButton key={10} value="×" auxHandler={this.operatorButtonHandleClick} />
        </div>

        <div>
          <OperatorPadButton key={11} value="C" auxHandler={this.operatorButtonHandleClick} />
          <NumPadButton key={12} value={0} auxHandler={this.props.numStateHandler} />
          <OperatorPadButton key={13} value="=" auxHandler={this.operatorButtonHandleClick} />
          <OperatorPadButton key={14} value="÷" auxHandler={this.operatorButtonHandleClick} />
        </div>
      </div>
    )
  }
}

export default CalcPad;
