import Link, { LinkProps } from 'next/link';

export interface ButtonProps extends LinkProps {
	children: React.ReactNode;
	color: 'primary' | 'secondary';
}

export default function Button({ children, color, ...props }: ButtonProps) {
	return (
		<Link
			{...props}
			className={`p-2.5 rounded-lg font-bold ${
				color === 'primary' ? 'bg-brand-primary text-text-tertiary' : 'bg-pink-200 text-amber-700'
			}`}
		>
			{children}
		</Link>
	);
}
