import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
	return (
		<div className="container mx-auto my-20">
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				<Card />
				<div>
					<Button color="secondary" href="#">
						Button
					</Button>
				</div>
			</div>
		</div>
	);
}
