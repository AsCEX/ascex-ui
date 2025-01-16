import Row from "./Row";

interface PaneProps {
    items: any[],
    name: string,
    side: string,
    width: string | number
}

function Pane({items, name, side, width = "auto"}: PaneProps) {

    return (
        <div className={"pane " + name } >
            <div
                className={`${name}InnerContent paneInnerContent`}
                style={{
                    width: width,
                    height: 96,
                    transform: 'translate3d(0px, 0px, 0px)',
                }}
            >
                {items?.map((item, i) => (
                    <Row key={i} index={i} isEven={(i % 2 === 0)} item={item} side={side} />
                ))}
            </div>
        </div>
    );
}

export default Pane;