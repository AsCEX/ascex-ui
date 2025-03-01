import { useState } from "react";
import "./Grid.css"; // Add styles for better visualization

const ROWS = 5;
const COLS = 5;

export default function Chkbox() {
    const [selectedCells, setSelectedCells] = useState<any>({});
    const [isDragging, setIsDragging] = useState(false);
    const [startCell, setStartCell] = useState<any>(null);

    const toggleCell = (row: any, col: any) => {
        setSelectedCells((prev: any) => ({
            ...prev,
            [`${row},${col}`]: !prev[`${row},${col}`],
        }));
    };

    const handleMouseDown = (row: any, col: any) => {
        setStartCell({ row, col });
        setIsDragging(true);
    };

    const handleMouseEnter = (row: any, col: any) => {
        if (!isDragging || !startCell) return;

        const minRow = Math.min(startCell.row, row);
        const maxRow = Math.max(startCell.row, row);
        const minCol = Math.min(startCell.col, col);
        const maxCol = Math.max(startCell.col, col);

        const newSelection = { ...selectedCells };
        for (let r = minRow; r <= maxRow; r++) {
            for (let c = minCol; c <= maxCol; c++) {
                newSelection[`${r},${c}`] = true;
            }
        }
        setSelectedCells(newSelection);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="grid" onMouseUp={handleMouseUp}>
            {Array.from({ length: ROWS }).map((_, row) => (
                <div key={row} className="row">
                    {Array.from({ length: COLS }).map((_, col) => (
                        <input
                            key={col}
                            type="checkbox"
                            className="cellx"
                            checked={selectedCells[`${row},${col}`] || false}
                            onChange={() => toggleCell(row, col)}
                            onMouseDown={() => handleMouseDown(row, col)}
                            onMouseEnter={() => handleMouseEnter(row, col)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
