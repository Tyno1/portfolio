// biome-ignore lint/style/useImportType: React is needed for JSX
import React from "react";
import type { ReactNode } from "react";

interface IconButtonProps {
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	label: string;
	className?: string;
	variant?: string;
	isSubmitting?: boolean;
	type?: "submit" | "reset" | "button" | undefined;
	icon?: ReactNode;
}

const IconButton = ({
	label,
	icon,
	onClick,
	className,
	variant,
	isSubmitting,
	type,
}: IconButtonProps) => {
	let classNames = className;
	switch (variant) {
		case "outlined":
			classNames += " px-3 py-2 border border-2 rounded-lg";
			break;
		case "filled":
			classNames += " px-3 py-2 text-black rounded-lg";
			break;
		default:
			break;
	}

	return (
		<button
			aria-label={label}
			onClick={onClick}
			type={type}
			disabled={isSubmitting}
			className={classNames}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: 10,
			}}
		>
			{icon}
		</button>
	);
};

export default IconButton;
