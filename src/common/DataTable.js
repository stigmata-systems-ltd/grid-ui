import React, { Component } from "react";
import IconButton from "../common/forms/IconButton";
import Button from "../common/forms/Button";

class DataTable extends Component {
  renderTableHeaders = () => {
    return this.props.metaData.map((header) => <th>{header}</th>);
  };

  render() {
    return (
      <div class="table-responsive pt-3 data-table">
        <table class="table dataTable no-footer">
          <thead>
            <tr>{this.renderTableHeaders()}</tr>
          </thead>
          <tbody>
            {this.props.bodyData.length > 0 ? (
              this.props.bodyData.map((data, rowIndex) => {
                return (
                  <tr>
                    {Object.keys(data).map((key) => (
                      <>
                        <td> {data[key].toString()}</td>
                      </>
                    ))}

                    <td>
                      {this.props.showEdit && (
                        <Button
                          btnText="Edit"
                          btnType="primary"
                          onClick={() => this.props.onClickEdit(rowIndex)}
                        />
                      )}
                      {this.props.showDelete && (
                        <td class="action-btns" style={{ width: "1%" }}>
                          <IconButton
                            iconName="faTrash"
                            onClick={() => this.props.onClickDelete(data.id)}
                          />
                        </td>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>
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
