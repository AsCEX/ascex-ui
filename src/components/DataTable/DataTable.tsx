import Grid from "./Components/Grid";
import DataTableNotFound from "./DataTableNotFound";
import { Body, Footer } from "./Partials";
import {useRef} from 'react';
import "./DataTable.css";
import DataTableLoader from "./DataTableLoader.js";
import {DataTableProvider} from "./Context/DataTableContext";
import {DataTableContextProps} from "@components/DataTable/DataTableTypes";

function DataTable( {
    footer,
    headers,
    items,
    name,
    loaded = false,
    options,
}: DataTableContextProps ){
    const loadingRef = useRef(null);

  return (
      <DataTableProvider
          name={name}
          options={{
              height: options?.height ?? null,
              rowHeight: options?.rowHeight ?? "xs"
          }}
          headers={headers}
          items={items} >
        <Grid>
          {!loaded && <DataTableLoader loadingRef={loadingRef}/> }
          {items.length === 0 && <DataTableNotFound/> }
          {loaded &&
              <Body />
          }
          <Footer>{footer}</Footer>
        </Grid>
      </DataTableProvider>
  );
}

export default DataTable;