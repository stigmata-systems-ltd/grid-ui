import React, { Component } from "react";
import '../../assets/css/styles.css';

class DownloadToExcelButton extends Component {

    render() {
        return (
            <div class="row" style={{ marginLeft: "300px" }}>
                <div class="input-group md-form form-sm form-1 pl-0">
                    <button className="btn btn-success">Download to Excel</button>
                </div>
            </div>
        )
    }
}

export default DownloadToExcelButton;