import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function AlertInfo(props: Props) {
    const { children } = props;

    return (
        <div className="alert alert-info" role="alert">
            {children}
        </div>
    );
}

export default AlertInfo;
