import useDataTable from "../Utils/useDataTable.jsx";
import CardPane from "@components/DataTable/Components/CardPane.tsx";

function BodyCard() {

    const {
        items,
        // name,
        options,
    } = useDataTable();

    const {
        scrollXRef
    } = options ?? {};

    return (
        <>
            <div
                ref={scrollXRef}
                className=""
                 // onScroll={(e) => setScroll(e)}
            >
                <div className="flex w-full" >
                    <div className={"flex flex-col w-full p-4"} >
                        <CardPane items={items}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BodyCard;