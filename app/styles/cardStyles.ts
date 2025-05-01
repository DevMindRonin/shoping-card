const cardStyles = {
	wrapper:
		"w-[332px] h-[360px] p-4 border border-[#BFBFBF] rounded-lg flex flex-col gap-5 transition-shadow hover:shadow-lg focus-within:shadow-lg shadow-[0px_4px_4px_0px_#00000040]",
	imageContainer: "w-[300px] h-[126px] bg-[#D9D9D9] relative rounded",
	heading: "text-[24px] text-[#5900FF] font-semibold",
	description: "text-[16px] text-[#372A2A]",
	footerWrapper: "w-[300px] h-[63px] pt-6 flex justify-end gap-4",

	buttonBase:
		"w-[66px] h-[39px] flex items-center justify-center text-center rounded-lg p-[10px] gap-[10px] transition-all duration-300 ease-out border-2",
	buttonVariants: {
		primary: {
			default: "border-[#FF00D5] bg-[#FF00D5] text-white",
			hover: "hover:bg-[#96007D] hover:border-[#96007D] hover:text-white",
			active:
				"active:border-[#5E014E] active:bg-[#5E014E] active:text-[#5E014E]]",
		},
		secondary: {
			default: "border-[#FF00D5] bg-white text-[#FF00D5]",
			hover: "hover:border-[#96007D] hover:text-[#96007D]",
			active: "active:border-[#5E014E] active:bg-white active:text-[#5E014E]",
		},
	},
};
export default cardStyles;
