import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    variant?:  "danger" | "dark" | "info" | "light" | "success" | "secondary" | "primary" | "warning";
}

function Alert(props: Props) {
    const { children, variant = "primary" } = props;

    return (
        <div className={`alert alert-${variant}`} role="alert">
            {children}
        </div>
    );
}

export default Alert;
