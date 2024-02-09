import { ReactNode } from "react";
import If from "./If";

interface Props {
    children: ReactNode;
    variant?:
        | "danger"
        | "dark"
        | "info"
        | "light"
        | "primary"
        | "secondary"
        | "success"
        | "warning";
    dismissible?: boolean;
    onDismiss?: () => void;
}

function Alert(props: Props) {
    const {
        children,
        variant = "primary",
        dismissible = false,
        onDismiss,
    } = props;

    let className = `alert alert-${variant}`;
    if (dismissible) className += " alert-dismissible fade show";

    return (
        <div className={className} role="alert">
            {children}
            <If condition={dismissible}>
                <button
                    type="button"
                    className="btn-close"
                    aria-label="close"
                    data-bs-dismiss="alert"
                    onClick={onDismiss}
                ></button>
            </If>
        </div>
    );
}

export default Alert;
