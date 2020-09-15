import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
class CustomAutocomplete extends Component {

    render() {
        return (
            <Autocomplete
                id="combo-box-demo"
                value={this.props.value}
                onChange={(event, newValue) => this.props.onChange(event)}
                inputValue={this.props.value}
                onInputChange={(event, newInputValue) => this.props.onChange(event)}
                options={this.props.selectOptions}
                getOptionLabel={(option) => option.gridName}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Grid Number" variant="outlined" />}
            />
        )
    }
}

export default CustomAutocomplete;