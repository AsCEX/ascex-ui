
function DataTableLoader({ loadingRef } : any) {
    return (
        <div className={'zloading flex w-full h-full items-center justify-center'} ref={loadingRef}>
            <div className="loadtext flex gap-1 items-center justify-center">
                <div className="mr-1 zloader">Loading...</div>
                Processing...
            </div>
        </div>
    );
}

export default DataTableLoader;