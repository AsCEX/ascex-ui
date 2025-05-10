import clsx from "clsx";
import useDataTable from "@components/DataTable/Utils/useDataTable.tsx";

interface CardPaneProps {
    items: any[],
}

const CardPane = ({ items }: CardPaneProps) => {

    const { cardTemplate, cardHeader } = useDataTable();

    return (
        <>
            <div className={"relative flex"}>
                {cardHeader && cardHeader(items)}
            </div>
            { items.map((item: any, index: number) => (
                <div key={`card-pane-${index}`}
                     className={
                        clsx("flex relative w-full")}>
                    {cardTemplate && cardTemplate(index, item)}
                </div>
            ))}
            
        </>
    );
}

export default CardPane;