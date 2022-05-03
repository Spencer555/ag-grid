import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import axios from 'axios'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
const App = () => {

 const gridRef = useRef(); // Optional - for accessing Grid's API
 const [rowData, setRowData] = useState([]); // Set rowData to Array of Objects, one Object per Row
 const update = useCallback( event => {


   


  
  var id = event?.data?.id
  var updatedData = event?.data
axios.put(`https://equity-help-be.herokuapp.com/api/trust/trust/${id}/`, updatedData, {
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUxNzY0NDMyLCJqdGkiOiIxMDA1NWMxZjE1OGM0YjFiYTQxMTRjNmFkZDdjYmFiMCIsInVzZXJfaWQiOjYxfQ.EL0UQSM233GKjCbpLrBmF1YnV3aFD506FY9SBz0YGWE`,

  },

 })
 .then(res => {
   console.log(res)
 })
 .catch(err => console.log(err))

}, []);

 // Each Column Definition results in one Column.
 const [columnDefs, setColumnDefs] = useState([
   {field: 'name', editable:true},
   {field: 'address_id', editable:true},
   {field: 'eh_list_price', editable:true},
   {field: 'city'},
   {field: 'street_1'},
   {field: 'family'},
   {field: 'repair_stage'},
   {field: 'owner'},
   {field: 'zipcode'},
 ]);

 const defaultColDef = useMemo( ()=> ({
     sortable: true
   }));

 // Example of consuming Grid Event
 // Example load data from sever
 useEffect(() => {
   axios.get('https://equity-help-be.herokuapp.com/api/trust/trust/', {
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUxNzY0NDMyLCJqdGkiOiIxMDA1NWMxZjE1OGM0YjFiYTQxMTRjNmFkZDdjYmFiMCIsInVzZXJfaWQiOjYxfQ.EL0UQSM233GKjCbpLrBmF1YnV3aFD506FY9SBz0YGWE`,
 
      "Content-Type": "application/json",
    },
 
   })
   .then(res => {
     setRowData(res?.data?.results)
     console.log(res?.data?.results
)
   })
   .catch(err => console.log(err))
 }, []);


 


 // Example using Grid's API
 const buttonListener = useCallback( e => {
   gridRef.current.api.deselectAll();
 }, []);

 return (
   <Box >

     {/* Example using Grid's API */}
     <button onClick={buttonListener}>Push Me</button>

     {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
     <div className="ag-theme-alpine" style={{width: '90%', height: 500}}>

       <AgGridReact 
           ref={gridRef} // Ref for accessing Grid's API

           rowData={rowData} // Row Data for Rows

           columnDefs={columnDefs} // Column Defs for Columns
           defaultColDef={defaultColDef} // Default Column Properties

           animateRows={true} // Optional - set to 'true' to have rows animate when sorted
           rowSelection='multiple' // Options - allows click selection of rows

           onCellValueChanged={update} // Optional - registering for Grid Event
           
           />
     </div>
   </Box>
 );
};

export default App





