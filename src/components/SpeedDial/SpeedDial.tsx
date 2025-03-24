import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Plus} from "lucide-react";

interface SpeedDialActionTypes {
    icon: JSX.Element;
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface SpeedDialProps {
    actions: SpeedDialActionTypes[];
}

const SpeedDial = ({actions}: SpeedDialProps) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen(!open);

    return createPortal(
        <div className="fixed bottom-8 right-8 flex flex-col items-end gap-2 z-10">
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex flex-col items-end gap-2"
                >
                    {actions.map((action, index) => (
                        <button
                            key={index}
                            className="flex text-sm items-center gap-2 p-2 bg-white shadow-md rounded-lg text-gray-700 hover:bg-gray-200"
                            onClick={(e) => {
                                action.onClick && action.onClick(e);
                            }}
                        >
                            {action.icon}
                            <span>{action.label}</span>
                        </button>
                    ))}
                </motion.div>
            )}
            <button
                onClick={toggleOpen}
                className="p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
            >
                <Plus />
            </button>
        </div>,
        document.body
    );
};

export default SpeedDial;
