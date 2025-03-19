import clsx from "clsx";
import useDataTable from "@components/DataTable/Utils/useDataTable.tsx";

interface CardPaneProps {
    items: any[],
}

const CardPane = ({ items }: CardPaneProps) => {

    const { cardTemplate } = useDataTable();

    return (
        <>
            { items.map((item: any, index: number) => (
                <div key={`card-pane-${index}`}
                     className={
                        clsx(
                            "group relative w-full rounded-md my-2",
                            "bg-white p-4 text-left shadow-sm transition focus:outline-none",
                            "border border-gray-300 dark:border-gray-lemon-dark-border",
                            "data-[state=checked]:border-blue-500 data-[state=checked]:dark:border-blue-500",
                            "data-[disabled]:border-gray-100 data-[disabled]:dark:border-gray-lemon-dark-border data-[disabled]:bg-gray-50 data-[disabled]:shadow-none data-[disabled]:dark:bg-gray-lemon-dark-primary",
                            "focus:ring-2 focus:ring-blue-200 focus:dark:ring-blue-700/30 focus:border-blue-500 focus:dark:border-blue-700 dark:bg-gray-lemon-dark-secondary")}>
                    {cardTemplate(item)}
                </div>
            ))}
            
        </>
    );
}

export default CardPane;