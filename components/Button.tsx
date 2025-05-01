import { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from "react";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import cardStyles from "@/app/styles/cardStyles";

type CommonProps = {
	color?: "primary" | "secondary";
	className?: string;
	children: React.ReactNode;
};

// Typ pro <a>
type AnchorButtonProps = {
	href: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
	CommonProps;

// Typ pro <button>
type NativeButtonProps = {
	href?: undefined;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement> &
	CommonProps;

const Button: FC<ButtonProps> = ({
	color = "primary",
	href,
	className = "",
	children,
	...props
}) => {
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
