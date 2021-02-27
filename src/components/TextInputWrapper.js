import React, { Component } from 'react';
import TextInput from './TextInput';
import '../assets/textInput.css';
class TextInputWrapper extends Component {
    render() {
        const {groupName, firstLabel, secondLabel, firstOnChange, secondOnChange} = this.props;
        return (
            <div className="form">
                    <div className="group-container">
                        <div className="group-label">{groupName || "Group Name"}</div>
                        <div className="group-content">
                            <TextInput 
                                label={firstLabel}
                                onChange={firstOnChange}
                            />
                            <TextInput 
                                label={secondLabel}
                                onChange={secondOnChange}
                            />
                            <br />
                        </div>
                    </div>
            </div>
        );
    }
}

export default TextInputWrapper;