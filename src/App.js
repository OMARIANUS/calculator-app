import ResultScreen from './modules/ResultScreen.js';
import CalcPad from './modules/CalcPad.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      screenDisp: '0',
      preBuffer: 0,
      buffer: 0,
      operators: {
        '+': function(a, b) {return a + b},
        '-': function(a, b) {return a - b},
        '×': function(a, b) {return a * b},
        '÷': function(a, b) {return a / b}
      },
      currentOperation: '', // used to indicate current calculation process
      equalBtnState: false, // used to prevent bugs emerging from idle equalization
      calcReady: true // used to prevent bugs emerging while user changes between calc modes
    }

    this.screenDispHandler = this.screenDispHandler.bind(this);
    this.handleNumClick = this.handleNumClick.bind(this);
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
  }

  screenDispHandler(state) {
    window.alert('You have reached buffer limit!');
    return state;
  }

  handleNumClick(numeral) {
    this.setState(pvStt => {
      let val = pvStt.calcReady ? pvStt.screenDisp === '0' ? `${numeral}` :
                pvStt.screenDisp + `${numeral}` : `${numeral}`
      return {
        screenDisp: pvStt.screenDisp.length !== 15 ? val :
                    this.screenDispHandler(pvStt.screenDisp),
        preBuffer: pvStt.screenDisp.length !== 15 ? +val
                 : +pvStt.preBuffer,
        calcReady: true
      }
    });
  }

  handleOperatorClick(operator) {
    this.setState(pvStt => {
      if (operator === 'C') {
        return {
          screenDisp: '0',
          preBuffer: 0,
          buffer: 0,
          currentOperation: ''
        }
      }

      else if (operator === 'DEL') {
        let val, disp = pvStt.screenDisp;

        disp.length > 1
        ? val = disp.replace(disp[disp.length - 1], '')
        : val = '0'

        return {
          screenDisp: val,
          preBuffer: +val,
          currentOperation: pvStt.currentOperation === '=' ? ''
                          : pvStt.currentOperation
        }
      }

      else if (operator === '=' && pvStt.currentOperation != '=') {
        let val = this.state.operators[`${pvStt.currentOperation}`](pvStt.buffer, pvStt.preBuffer);

        return {
          screenDisp: `${val}`,
          preBuffer: 0,
          buffer: 0,
          currentOperation: `${operator}`,
          equalBtnState: false
        }
      }

      else {
        let val;
        pvStt.calcReady ? pvStt.buffer
        ? val = this.state.operators[`${pvStt.currentOperation}`](pvStt.buffer, pvStt.preBuffer)
        : val = +pvStt.screenDisp
        : val = pvStt.buffer

        return {
          screenDisp: `${val}`,
          buffer: val,
          currentOperation: `${operator}`,
          calcReady: false,
          equalBtnState: true
        }
      }
    });
  }

  render() {
    return (
      <div className="calc">
        <ResultScreen
          content={this.state.screenDisp}
          operator={this.state.currentOperation}
        />

        <CalcPad
          isEqualBtnEnabled={this.state.equalBtnState}
          numStateHandler={this.handleNumClick}
          operatorStateHandler={this.handleOperatorClick}
        />
      </div>
    )
  }
}

export default App;
