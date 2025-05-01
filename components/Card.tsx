"use client";
import Image from "next/image";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import img from "@/app/source/images/water.jpg";
import clsx from "clsx";
import cardStyles from "@/app/styles/cardStyles";

const Card = () => {
	const router = useRouter();
	const handleCardClick = () => {
		router.push("https://example.com");
	};
	return (
		<article
			className={cardStyles.wrapper}
			tabIndex={0}
			role="link"
			onClick={handleCardClick}
			onKeyDown={(e) => {
				if (e.key === "Enter") handleCardClick();
			}}
		>
			<div className={cardStyles.imageContainer}>
				<Image
					src={img}
					alt="Water Image"
					fill
					className="object-cover rounded"
					sizes="300px"
				/>
			</div>
			<h2 className={cardStyles.heading}>Card Title</h2>
			<p className={cardStyles.description}>
				This is a card description. It can be short or it can be long.
			</p>
			<footer className={cardStyles.footerWrapper}>
				<Button
					color="secondary"
					href="https://wikipedia.org/wiki/Water"
					onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
						e.stopPropagation()
					}
					className={clsx(
						cardStyles.buttonBase,
						cardStyles.buttonVariants.secondary.default,
						cardStyles.buttonVariants.secondary.hover,
						cardStyles.buttonVariants.secondary.active
					)}
				>
					Share
				</Button>
				<Button
					color="primary"
					href="https://novinky.cz"
					onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
						e.stopPropagation()
					}
					className={clsx(
						cardStyles.buttonBase,
						cardStyles.buttonVariants.primary.default,
						cardStyles.buttonVariants.primary.hover,
						cardStyles.buttonVariants.primary.active
					)}
				>
					Save
				</Button>
			</footer>
		</article>
	);
};

export default Card;
