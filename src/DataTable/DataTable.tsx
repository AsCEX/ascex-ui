import Grid from "./Components/Grid";
import DataTableNotFound from "./DataTableNotFound";
import { Body, Footer } from "./Partials";
import {useRef} from 'react';
import "./DataTable.css";
import accounting from "accounting";
import DataTableLoader from "./DataTableLoader.js";
import DataTableContext from "./Context/DataTableContext";


accounting.settings.currency.symbol = "";

interface DataTableProps {
  contextMenuItem?: any,
  footer?: any,
  loaded?: boolean,
  headers?: any,
  height?: number | string,
  items?: any,
  name?: string,
  onRowExpand?: any,
  resizable?: boolean,
}


function DataTable( {
    contextMenuItem,
    headers = [],
    height = 0,
    items = [],
    name,
    loaded = false,
    footer,
    ...props
}: DataTableProps ){

  const loadingRef = useRef(null);
  console.log("DTTT");

  return (
      <DataTableContext context={{...props, height: height}} headers={headers} items={items} >
        <Grid>
          {!loaded && <DataTableLoader loadingRef={loadingRef}/> }
          {items.length === 0 && <DataTableNotFound/> }
          {loaded &&
              <Body />
          }
            <Footer>{footer}</Footer>
        </Grid>
      </DataTableContext>
  );
}

export default DataTable;