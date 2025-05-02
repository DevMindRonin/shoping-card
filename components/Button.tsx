import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { AnchorButtonProps, NativeButtonProps } from "@/app/types/types";
import Link from "next/link";
import clsx from "clsx";
import cardStyles from "@/app/styles/cardStyles";

const Button = ({
	color = "primary",
	href,
	className = "",
	children,
	...props
}: ButtonProps) => {
	const combinedClassName = clsx(
		cardStyles.buttonBase,
		cardStyles.buttonVariants[color].default,
		cardStyles.buttonVariants[color].hover,
		cardStyles.buttonVariants[color].active,
		className
	);

	if (href) {
		return (
			<Link
				href={href}
				className={combinedClassName}
				{...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			className={combinedClassName}
			{...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			{children}
		</button>
	);
};

export default Button;
export type ButtonProps = AnchorButtonProps | NativeButtonProps;
