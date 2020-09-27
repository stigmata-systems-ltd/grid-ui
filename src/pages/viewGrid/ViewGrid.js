import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import { _viewGridMetaData, transformGridData } from './utils';
import CustomAlert from '../../common/forms/customAlert';
import CustomDataTable from '../../common/CustomDataTable';
import ConfirmModal from '../../common/ConfirmModal';
import TableFilter from '../../common/TableFilter';
import Loader from '../../common/Loader';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGridId: null,
      showDeleteModal: false,
      filterText: '',
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.fetchGridData();
  }
  filteredItems = data => {
    return (
      data &&
      data.filter(
        item =>
          item.gridno &&
          item.gridno
            .toLowerCase()
            .includes(this.state.filterText.toLowerCase())
      )
    );
  };

  render() {
    return (
      <>
        {this.props.grid.isListGridLoading && <Loader />}
        <ContentLoader>
          <FormContainer formTitle={'Grid List'}>
            <div>
              {this.props.grid.deleteGrid.message ? (
                <CustomAlert
                  variant={this.props.grid.variant}
                  message={this.props.grid.deleteGrid.message}
                />
              ) : null}
            </div>
            <FormRow>
              <CustomDataTable
                metaData={_viewGridMetaData(
                  id => {
                    this.setState({ activeGridId: id, showDeleteModal: true });
                  },
                  id => this.props.onEditClick(id),
                  id => this.props.onViewClick(id),
                  this.props.pageAccess
                )}
                bodyData={transformGridData(
                  this.filteredItems(this.props.grid.listGridDetails)
                )}
                pagination={true}
                paginationTotalRows={
                  this.props.grid.listGridDetails &&
                  this.filteredItems(this.props.grid.listGridDetails).length
                }
                paginationPerPage={5}
                paginationResetDefaultPage={this.state.resetPaginationToggle}
                noHeader={true}
                subHeader
                subHeaderComponent={
                  <TableFilter
                    placeholder="Search By Grid Name"
                    onFilter={e => {
                      e.target.value === '' &&
                        this.setState({
                          resetPaginationToggle: !this.state
                            .resetPaginationToggle,
                        });
                      this.setState({ filterText: e.target.value });
                    }}
                    filterText={this.state.filterText}
                  />
                }
              />
            </FormRow>
            <ConfirmModal
              showModal={this.state.showDeleteModal}
              handleClose={() =>
                this.setState({ showDeleteModal: false, activeGridId: null })
              }
              title="Delete Grid"
              handleConfirm={() => {
                this.props.onDeleteClick(this.state.activeGridId);
                this.setState({ showDeleteModal: false });
              }}
            >
              <h6 className="text-danger">
                Are you sure you want to delete this Grid?
              </h6>
            </ConfirmModal>
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default Dashboard;
