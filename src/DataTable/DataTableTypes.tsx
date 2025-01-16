const DataTableParams = {
    start: 0,
    length: 50,
    searchTerm: '',
    sorts: [],
    filters: [],
};

const DataTableTypes = {
    headers: [],
    initHeaders: [],
    isLoaded: false,
    items: [],
    height: 0,
    width: 0,
    name: '',
    resizable: false,
    contentWidth: 0,
    contentHeight: 0,
    leftPaneWidth: 75,
    paddingWidth: 80,
    freezePane: 0,
    rowHeight: 32,
    rowNumberWidth: 48,
    selectedItems: [],
    controller: new AbortController(),
    scrollXRef: ()=>{},
    url: ''
};

const DataTableContextMenuTypes = {
    width: 220,
    items: [],
    contextMenuId: null,
    row: {},
    show: false,
    xPos: 0,
    yPos: 0,
    offsetX: 0,
    offsetY: 0
};


export {
    DataTableContextMenuTypes,
    DataTableParams,
    DataTableTypes
};