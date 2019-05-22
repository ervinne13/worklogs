import React from 'react';
import './style.css';

/**
 * @prop label      The label that will be displayed next to the control. Defaults to "Default"
 * @prop value      The initial value of the input. Defaults to 0.
 */
class AdjustableNumericInput extends React.Component {
    state = {
        value: 0,
        label: 'Default'
    }

    componentWillMount() {
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.setDefaultNameIfUnset();
        this.setDefaultMaxValue();
        this.setValueIfSetOnProps();
    }

    setDefaultNameIfUnset = () =>  {
        const { label } = this.props;
        if(label && label !=="") {
            this.setState({ label });
        }
    }

    setDefaultMaxValue = () =>  {
        const isMaxValueSet = this.props.maxValue;
        this.maxValue = isMaxValueSet ?  this.props.maxValue : 99;
    }

    setValueIfSetOnProps = () => {
        const { value } = this.props;
        if(value && value > 0) {
            this.setState({ value });
        }
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

    handleInputChange(e) {
        const value = e.target.value;
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
            <div className={ `adj-numeric-input ${ this.props.className }` }>
                <div className="nameWrap">
                    { this.state.label }
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