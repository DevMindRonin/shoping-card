import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="container mx-auto my-20">
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{/* Place the Card here. */}
				<div>
					<Button color="primary" href="#">Primary</Button>
				</div>
			</div>
    </div>
  );
}
