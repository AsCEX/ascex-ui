import React from "react";
import accounting from "accounting";
import moment from "moment";
import {JSONPath} from 'jsonpath-plus';

// Define types for header and item
interface Header {
  type?: string;
  min?: number;
  width?: number;
  left?: number;
  className?: string;
  badgeClass?: string;
  name: string;
  onClick?: (item: unknown) => void;
  render?: (data: unknown, row: unknown, header: unknown) => React.ReactNode;
  lists?: { id: unknown; text?: string; className?: string }[];
}

interface CellProps {
  header: Header;
  item: unknown
}

const Cell = ({ header, item }: CellProps) => {
  const filter = (
      data: number | string,
      row: any,
      header: Header = {} as Header,
      render: ((data: any, row: any, header: any) => React.ReactNode) | undefined
  ): React.ReactNode => {
    const type = header.type ?? "";
    switch (type) {
      case "currency": {
        const min : number = header.min ?? 0;
        let textColor = "";
        let html = "0.00";

        if (data) {
          if (typeof data === "number") {
            textColor = min === null ? (!isNaN(data) && data < 0 ? "text-red-500" : "") : "";
          }
          if (!isNaN(data as number) && !isNaN(min as number) && min !== null) {
            data = min;
          }

          html = accounting.formatMoney(data);
        }

        return (
          <div className={"flex w-full " + textColor}>
            <div className={"justify-start"}>₱</div>
            <div className={"justify-end ml-auto"}>{html}</div>
          </div>
        );
      }
      case "decimal":
        return data ? accounting.formatMoney(data) : "";
      case "date": {
        const dateF = data ? moment(data).format("L") : "";
        return <div className={"grow text-right p-2"}>{dateF}</div>;
      }
      case "datetime": {
        return data ? <div className={"p-2"}>{moment(data).format("L LT")}</div> : "";
      }
      case "badge": {
        let label = data;
        let className = "bg-gray-200 text-gray-800";
        for (const item of header.lists || []) {
          if (item.id === data) {
            label = item.text ?? data;
            className = item.className || "";
            break;
          }
        }

        className += " " + (header.badgeClass || "");

        return (
          <div className="flex space-x-2">
            <div
              style={{ paddingTop: "0.1em", paddingBottom: "0.1rem" }}
              className={"text-xs px-2 rounded-full " + className}
            >
              {label}
            </div>
          </div>
        );
      }
      case "custom": {
        return render ? render(data, row, header) : '';
      }
      default:
        return <div className={"p-2"}>{data}</div>;
    }
  };

  const getValue = (name: string, item: any) => {
    const matches = JSONPath({path: name, json: item});
    return matches.length > 0 ? matches[0] : null;
  }

  return (
    <div
      style={{
        width: header.width ?? 66,
        minWidth: header.width ?? 66,
        left: header.left,
        zIndex: 2,
      }}
      className={
        "cell primary read group-[.even]:bg-table-bg group-[.odd]:bg-table-bg-odd group-[.even]:dark:bg-table-bg-dark group-[.odd]:dark:bg-table-bg-odd-dark text-table-header-text-color-dark dark:text-table-header-text-color-dark border-b-[1px] border-b-slate-200 dark:border-b-table-border-color border-l-[1px] border-l-slate-200 dark:border-l-table-border-color"
      }
    >
      <div className="flex-auto" style={{ padding: 0 }}>
        <div
          className={
            "w-full flex line-height-4 whitespace-nowrap cell-wrap text-xs " +
            (header?.className ?? "")
          }
          onClick={() => {
            if (header?.onClick) {
              header.onClick(item);
            }
          }}
        >
          {filter(
              getValue(header.name, item),
            item,
            header ?? ({} as Header),
            header.render ?? undefined
          )}
        </div>
      </div>
    </div>
  );
};

export default Cell;
