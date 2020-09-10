import React, { Component } from "react";




class LayerDPRViewDataTable extends Component {


    render() {

        return (
            <div class="table-responsive pt-3 data-table">

                <table className="table table-striped table-hover table-bordered">
                    <tr>
                        <th>Quantity</th>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>

                    </tr>
                    <tr>
                        <th>Subcontractor</th>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>

                    </tr>

                </table>
            </div>

        );
    }
}

export default LayerDPRViewDataTable;
