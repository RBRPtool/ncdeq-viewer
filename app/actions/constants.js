
export function get_a_constant(state, constant_name){


    //read file via jquery ajax.
    //  yes hacky but it works for this case.
    $.ajax({
      isLocal: true,
      url: 'config/constants.csv',
      dataType: 'text',
      contentType: 'application/CSV',
      aysnc: false,
    }).done( (data) => {
      let allRows = data.split(/\r?\n|\r/);
      for (let singleRow = 0; singleRow < allRows.length; singleRow++) {
        if(singleRow>0){
          var rowCells = allRows[singleRow].split(',');
          if(rowCells[1]){
            const row = {name:rowCells[0],value:rowCells[1]}
            if(rowCells[0].toUpperCase() === constant_name.toUpperCase()){
              console.log(rowCells[1])
              return rowCells[1]
            }

          }
        }
      }
      return ""

    });
}


export function set_constants(){
  return (dispatch,getState) => {

    //read file via jquery ajax.
    //  yes hacky but it works for this case.
    $.ajax({
      isLocal: true,
      url: 'config/constants.csv',
      dataType: 'text',
      contentType: 'application/CSV',
    }).done( (data) => {
      let allRows = data.split(/\r?\n|\r/);
      let constants_data = []
      for (let singleRow = 0; singleRow < allRows.length; singleRow++) {
        if(singleRow>0){
          var rowCells = allRows[singleRow].split(',');
          if(rowCells[1]){
            const row = {name:rowCells[0],value:rowCells[1]}
            constants_data.push(row)
          }
        }
      }

      dispatch(constants('SET_CONSTANTS', constants_data));

    });
  }
}

function constants(type, data){
  return {type: type, constants: data, receivedAt: Date.now()}
}
