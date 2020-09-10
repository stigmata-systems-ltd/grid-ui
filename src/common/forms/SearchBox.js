import React, { Component } from "react";
import '../../assets/css/styles.css';

class SearchBox extends Component {

    render() {
        return (
            <div class="row" style={{ marginLeft: "300px" }}>
                <div class="input-group md-form form-sm form-1 pl-0">
                    <div class="input-group-prepend">
                        <span class="input-group-text purple lighten-3" id="basic-text1"><i class="fas fa-search text-white"
                            aria-hidden="true"></i></span>
                    </div>
                    <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
                </div>
            </div>
        )
    }
}

export default SearchBox;