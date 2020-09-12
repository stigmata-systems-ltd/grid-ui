import React, { Component } from "react";
import IconButton from "../common/forms/IconButton";
import Button from '../common/forms/Button';



class DataTable extends Component {
  renderTableHeaders = () => {
    return this.props.metaData.map((header) => <th>{header}</th>);
  };

  render() {
    return (
      <div class="table-responsive pt-3 data-table">
        <table class="table table-bordered">
          <thead>
            <tr>{this.renderTableHeaders()}</tr>
          </thead>
          <tbody>
            {this.props.bodyData.map((data, rowIndex) => {
              return (
                <tr>
                  {this.props.showRowDelete && (
                    <td class="action-btns" style={{ width: "1%" }}>
                      <IconButton
                        iconName="faTrash"
                        onClick={this.props.onClick}
                      />
                    </td>
                  )}
                  {Object.keys(data).map((key) => (
                    <>
                      <td> {data[key].toString()}</td>
                    </>
                  ))}

                  <td>
                    {this.props.isShowView &&
                      <Button
                        btnText="View"
                        btnType="primary"
                        onClick={() => this.props.onClickEdit(rowIndex)}
                      />
                    }
                    {this.props.isShowEdit &&
                      <Button
                        btnText="Edit"
                        btnType="btn-secondary"
                        onClick={() => this.props.onClickEdit(rowIndex)}
                      />
                    }
                  &nbsp;
                  {this.props.isShowDelete &&
                      <Button
                        btnText="Delete"
                        btnType="btn-danger"
                        onClick={() => this.props.onClickDelete(rowIndex)}
                      />
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
