import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    condition: boolean;
}

function If(props: Props) {
    const { children, condition } = props;

    return <>{ condition && children}</>
}

export default If;
