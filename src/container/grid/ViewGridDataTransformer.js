import store from '../../store';

export const viewGridNumber = (data) => {
    let gridNumber = store.getState().grid
    data.map( item => {
        gridNumber.push ({
            gridno: item.gridno,
          
        })
    })
    return gridNumber;
}