import React from 'react';
import './style.css';

class AdjustableNumericInput extends React.Component {
    state = {
        value: 0,
        label: 'Default'
    }

    componentWillMount() {
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount(){
        this.setDefaultNameIfUnset();
        this.setDefaultMaxValue();
    }

    setDefaultNameIfUnset = () =>  {
        if(this.props.label && this.props.label !=="") {
            this.setState({
                label: this.props.label,
            });
        }
    }

    setDefaultMaxValue = () =>  {
        const isMaxValueSet = this.props.maxValue;
        this.maxValue = isMaxValueSet ?  this.props.maxValue : 99;
    }

    handleDecrease = () => {
        let currentValue = this.state.value;
        if(currentValue <= 0) return;
        this.setState({ value: --currentValue });
    }

    handleIncrease = () => {
        let currentValue = this.state.value;
        if(currentValue >= this.maxValue) return;
        this.setState({ value: ++currentValue });
    }

    handleInputChange(evt) {
        const value = evt.target.value;
        const valueIsNumeric = /^\d+$/.test(value);
        const valueIsExceedingMax = value >= this.maxValue;
        
        // text instead of number to prevent cursor.
        // Also prevent to delete all text.
        if(valueIsNumeric && !valueIsExceedingMax){
            this.setState({ value });
        }
    }

    handleBlur = () => {
        const value = this.state.value;
        if(value === ''){
            this.setState({ value: 0 });
        }
    }

	render(){	
        return(
            <div className="adj-numeric-input">
                <div className="nameWrap">
                    {this.state.label}
                </div>
                <div className="square">
                    <button onClick={ this.handleDecrease }>-</button>
                </div>
                <div className="square -with-input">
                    <input 
                        className="iText"
                        type="text"
                        onChange={ this.handleInputChange } 
                        onBlur={ this.handleBlur }
                        value={ this.state.value }
                    />
                </div>
                <div className="square">
                    <button onClick={ this.handleIncrease }>+</button>
                </div>
            </div>
        )
	}
}

export default AdjustableNumericInput;