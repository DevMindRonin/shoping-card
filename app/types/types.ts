import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

export type CommonProps = {
	color?: "primary" | "secondary";
	className?: string;
	children: React.ReactNode;
};

// Typ pro <a>
export type AnchorButtonProps = {
	href: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
	CommonProps;

// Typ pro <button>
export type NativeButtonProps = {
	href?: undefined;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement> &
	CommonProps;
