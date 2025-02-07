import { ReactNode } from "react";

interface TextProp {
    children: ReactNode
}
const Text = ({children} : TextProp) => {
    return <h3>{children} There!</h3>;
}


export default Text;