import React, { Component } from "react";

class DataTable extends Component {

    renderTableHeaders = () => {
        return this.props.metaData.map((header) => <th>{header}</th>)
    }

    render() {
        return (
            <div class="table-responsive pt-3 data-table">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            {this.renderTableHeaders()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bodyData.map((data) => {
                            return(
                                <tr>
                                    {Object.keys(data).map(key => <td> {data[key].toString()}</td>)}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataTable;