
function DataTableNotFound() {
    return (
        <div className={'zloading flex w-full h-full items-center justify-center'}>
            <div className="loadtext flex gap-1 items-center justify-center dark:text-white">
                No Results Found!
            </div>
        </div>
    );
}

export default DataTableNotFound;