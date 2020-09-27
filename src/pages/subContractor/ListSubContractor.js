import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import SCRDataTable from '../../common/scrDataTable';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import SearchBox from '../../common/forms/SearchBox';
import CustomDataTable from '../../common/CustomDataTable';
import CustomAlert from '../../common/forms/customAlert';
import ConfirmModal from '../../common/ConfirmModal';
import { viewSCRMetaData, transformSubCat } from './utils';
import TableFilter from '../../common/TableFilter';
import Loader from '../../common/Loader';

class ListSubContractor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
      filterText: '',
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.fetchSCRData();
  }
  filteredItems = data => {
    return (
      data &&
      data.filter(
        item =>
          item.code &&
          item.code.toLowerCase().includes(this.state.filterText.toLowerCase())
      )
    );
  };

  render() {
    return (
      <>
        {this.props.scr.isSubContListLoading && <Loader />}
        <ContentLoader>
          <FormContainer formTitle={'List SubContractor'}>
            <div>
              {this.props.scr.deleteSubContractor.message ? (
                <CustomAlert
                  variant={this.props.scr.variant}
                  message={this.props.scr.deleteSubContractor.message}
                />
              ) : null}
            </div>
            <FormRow>
              <CustomDataTable
                metaData={viewSCRMetaData(
                  id => this.setState({ activeId: id, showDeleteModal: true }),
                  id => this.props.editSCR(id),
                  this.props.pageAccess
                )}
                bodyData={transformSubCat(
                  this.filteredItems(this.props.scr.listSCRDetails)
                )}
                pagination={true}
                paginationTotalRows={
                  this.props.scr.listSCRDetails &&
                  this.filteredItems(this.props.scr.listSCRDetails).length
                }
                paginationPerPage={5}
                noHeader={true}
                subHeader
                subHeaderComponent={
                  <TableFilter
                    placeholder="Search By Vendor Code"
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
                this.setState({ showDeleteModal: false, activeId: null })
              }
              title="Delete SubContractor"
              handleConfirm={() => {
                this.props.deleteSCR(this.state.activeId);
                this.setState({ showDeleteModal: false, activeId: null });
              }}
            >
              <h6 className="text-danger">
                Are you sure you want to delete this SubContractor?
              </h6>
            </ConfirmModal>
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default ListSubContractor;
