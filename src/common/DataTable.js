import React, { Component } from "react";
import IconButton from "../common/forms/IconButton";
import Button from "../common/forms/Button";

class DataTable extends Component {
  renderTableHeaders = () => {
    return this.props.metaData.map((header) => <th>{header}</th>);
  };

  render() {
    return (
      <div class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
        <table class="table dataTable no-footer table-bordered table-responsive">
          <thead>
            <tr>{this.renderTableHeaders()}</tr>
          </thead>
          <tbody>
            {console.log("datatable",this.props.bodyData)}
            {this.props.bodyData && this.props.bodyData.length > 0 ? (
              this.props.bodyData.map((data, rowIndex) => {
                return (
                  <tr>
                    {Object.keys(data).map((key) => (
                      <>{key !== "id" && <td> {data[key].toString()}</td>}</>
                    ))}

                    <td>
                      {this.props.showEdit && (
                        <Button
                          btnText="Edit"
                          btnType="primary"
                          onClick={() =>
                            this.props.onClickEdit(data.id, rowIndex)
                          }
                        />
                      )}
                      {this.props.showDelete && (
                          <IconButton
                            iconName="faTrash"
                            onClick={() =>
                              this.props.onClickDelete(data.id, rowIndex)
                            }
                          />
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={this.props.metaData.length}>
                  <h6 className="text-info">No Records Found</h6>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
