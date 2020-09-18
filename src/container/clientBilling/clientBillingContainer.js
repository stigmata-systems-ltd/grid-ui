import { connect } from "react-redux";
import ClientBilling from "../../pages/clientBilling/ClientBilling";
import store from "../../store";
import {
  getGridList,
  getLayerListForBilling,
  saveClientBilling,
} from "../../actions/clientBillingActions";
import {
  SET_CLIENT_SELECTED_GRID,
  SET_TRANS_BILLABLE_LAYERS,
  SET_BILLABLE_TABLE_DATA,
  SET_ADD_BILLABLE_ERROR,
  SET_BILLING_MONTH,
  SET_IPC_NUM,
  RESET_BILLING_FORM,
} from "../../actions/types";
import { getBillableTableData, getCheckedLayersCount, getGridNameFromId, getCreateBillingPayload } from "./dataTranformer";

const mapDispatchToProps = (dispatch) => {
  return {
    getGridList() {
      dispatch(getGridList());
      dispatch({ 
        type: RESET_BILLING_FORM
      })
    },
    handleGridSelection(value) {
      dispatch({
        type: SET_CLIENT_SELECTED_GRID,
        payload: value,
      });
      dispatch(getLayerListForBilling());
      dispatch({ 
        type: SET_ADD_BILLABLE_ERROR,
        payload: ""
      })
    },
    onChangeBillableCheckBox(value, id) {
      const client = store.getState().client;
      let billableLayers = [...client.billableLayers];
      billableLayers.map((layer) => {
        if (layer.id === id) {
          layer.checked = value;
        }
      });
      dispatch({
        type: SET_TRANS_BILLABLE_LAYERS,
        payload: billableLayers,
      });
      dispatch({ 
        type: SET_ADD_BILLABLE_ERROR,
        payload: ""
      })
    },
    onAddBillableLayers() {
      const client = store.getState().client;
      const gridName = client.selectedGrid.label;
      const checkedLayersCount = getCheckedLayersCount(client.billableLayers)
      if (client.billableLayers.length > 0 && checkedLayersCount > 0) {
        let billableLayers = [...client.billableLayers];
        let tableData = client.billableTableData;
        let isTableDataSet = false;
        tableData.map((data, index) => {
          if(data.id === gridName) {
            tableData[index] = getBillableTableData(billableLayers, gridName);
            isTableDataSet = true;
          }
        })
        !isTableDataSet && tableData.push(getBillableTableData(billableLayers, gridName));
        dispatch({
          type: SET_BILLABLE_TABLE_DATA,
          payload: tableData,
        });
      } else {
        dispatch({ 
          type: SET_ADD_BILLABLE_ERROR,
          payload: "Please select Atleast one layer to add"
        })
      }
    },
    deleteGridBillableTable(id) {
      const client = store.getState().client;
      let tmpBillableTable = [...client.billableTableData];
      client.billableTableData.map((data, index) => {
        if(data.id === id) {
          tmpBillableTable.splice(index, 1);
        }
      })
      dispatch({
        type: SET_BILLABLE_TABLE_DATA,
        payload: tmpBillableTable,
      });
    },
    handleBillingMonthChange(value) {
      dispatch({
        type: SET_BILLING_MONTH,
        payload: value
      })
    },
    handleIpcChange(value) {
      dispatch({
        type: SET_IPC_NUM,
        payload: value
      })
    },
    saveClientBilling() {
      const data = getCreateBillingPayload(store.getState().client);
      dispatch(saveClientBilling(data)).then(() => {
        dispatch({ 
          type: RESET_BILLING_FORM
        });
      });
    },
    resetForm() {
      dispatch({ 
        type: RESET_BILLING_FORM
      });
    }
  };
};

const mapStateToProps = (state) => {
  const client = store.getState().client;
  return {
    client,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientBilling);
