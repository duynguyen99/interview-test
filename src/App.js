import "./App.css";
import React from 'react';
import TextInputWrapper from "./components/TextInputWrapper";
import FIELD_TYPE from "./constant/fieldType";
import message_builder from "./constant/message";
const AMOUNT_GROUP = 5;
class App extends React.PureComponent {
  state  = {
    formValues: {
    }
  }

  onArrayChange = (e, field, key) => {
    const {value} = e.target;
    // TODO: validate value here by style: array number and seperate by ","
    const {formValues} = this.state;
    const currentTarget = formValues[key] || {firstValue: "", secondValue: ""};
    field === FIELD_TYPE.FIRST_FIELD ? 
      currentTarget.firstValue = value : 
      currentTarget.secondValue = value;
    const newForms = {...formValues, [key]: currentTarget}
    this.setState({formValues: newForms})
  }

  onButtonCheckSubmit = () => {
    const {formValues} = this.state;
    const {toArrayNumber} = this;
    const newLine = "\n";
    let message = "Result after check: \n";
    const formValuesArr = Object.keys(formValues);
    if(formValuesArr.length < AMOUNT_GROUP ){
      alert("Please enter full value!");
      return;
    }
    // TODO: Check all value is number
    formValuesArr.map((key) => {
      const {firstValue, secondValue} = formValues[key];
      const isBelongTo = this.checkIsBelongTo(toArrayNumber(firstValue), toArrayNumber(secondValue));
      message += message_builder(`group ${key}: A`, "B", isBelongTo ? "là con": "không là con") + newLine; 
    }); 
    alert(message);
  }

  checkIsBelongTo = (firstArrNumber, secondArrNumber) => {
    const valueIsNotExisted = 0;
    return firstArrNumber.every(number=> secondArrNumber.indexOf(number) >= valueIsNotExisted);
  }

  toArrayNumber = (value) => {
    return value.split(",");
  }

  render(){
    return <div className="App">
      {
        Array.from(Array(AMOUNT_GROUP).keys()).map((order) => {
          return <TextInputWrapper
                  firstLabel="A"
                  secondLabel="B"
                  groupName={`Group ${order + 1}`}
                  firstOnChange={(e) => this.onArrayChange(e, FIELD_TYPE.FIRST_FIELD, order)}
                  secondOnChange={(e) => this.onArrayChange(e, FIELD_TYPE.SECOND_FIELD, order)}
                />
        })
      }
      <button onClick={this.onButtonCheckSubmit}> Click here to check</button>
    </div>;
  }
}

export default App;
