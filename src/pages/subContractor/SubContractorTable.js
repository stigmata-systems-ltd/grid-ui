import React, { Component } from 'react';
import Button from '../../common/forms/Button';
import IconButton from '../../common/forms/IconButton';


class SubContractorTable extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }
    renderTableHeaders = () => {
        return this.props.metaData.map(header => <th><p>{header}</p></th>);
    };


    render() {
        return (
            <div class="table-responsive pt-4 data-table ">
                <table class="table table-bordered ">
                    <thead >
                        <tr>{this.renderTableHeaders()}</tr>
                    </thead>
                    <tbody>
                        {this.props.bodyData.map(data => {
                            return (
                                <tr>
                                    {Object.keys(data).map(key => (
                                        <>
                                            <td> {data[key].toString()}</td>
                                        </>
                                    ))}
                                    <td class="action-btns">
                                        <Button btnText="View" btnType="primary" />
                                        <IconButton iconName="faEdit" />
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

export default SubContractorTable;
