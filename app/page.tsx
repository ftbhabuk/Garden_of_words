"use client";

import { LoaderIcon, SparklesIcon } from "@/app/icons";
import { useCompletion } from "ai/react";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "sonner";

export default function Home() {
	const [text, setText] = useState("");
	const [selectedTag, setSelectedTag] = useState("");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const tags = ["Formal", "Casual", "Poetic", "Short"]; // Define your tags here

	const {
		completion,
		input,
		isLoading,
		handleInputChange,
		handleSubmit,
		setInput,
	} = useCompletion({
		body: { text, tag: selectedTag },
		onFinish: (prompt, completion) => setText(completion.trim()),
		onError: (error) => toast.error(error.message),
	});

	return (
		<form
			className="relative flex flex-col items-center md:justify-center min-w-full py-10 grow"
			onSubmit={(e) => {
				handleSubmit(e);
				setInput("");
			}}
		>
			
			{/* Tags Dropdown */}
			<div className="absolute top-[-125px] left-[529px] bottom-14 flex items-center space-x-4">

				{selectedTag ? (
					<span
						className="text-sm text-gray-800 dark:text-gray-300 cursor-pointer"
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					>
						{selectedTag}
					</span>
				) : (
					<span
						className="text-sm text-gray-800 dark:text-gray-300 cursor-pointer"
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					>
						#Tags
					</span>
				)}

				{isDropdownOpen && (
					<div className="flex space-x-2 bg-transparent rounded-lg shadow-lg p-2 z-10">
						{tags.map((tag) => (
							<span
								key={tag}
								className={`text-sm cursor-pointer text-gray-800 dark:text-gray-300 hover:text-blue-500 transition-colors ${
									selectedTag === tag ? "text-blue-600" : ""
								}`}
								onClick={() => {
									setSelectedTag(tag);
									setIsDropdownOpen(false);
								}}
							>
								{tag}
							</span>
						))}
					</div>
				)}
			</div>

			<TextareaAutosize
				value={
					isLoading && completion.length > 0
						? completion.trim()
						: text
				}
				onChange={(e) => {
					if (!isLoading) setText(e.target.value);
				}}
				className="rounded-lg drop-shadow-sm bg-gray-100 border border-gray-200 px-2 pt-10 pb-6 md:resize dark:bg-gray-900 dark:border-gray-800 min-w-full max-w-7xl min-h-32 md:min-w-96 focus:outline-none focus:border-blue-300 dark:focus:border-blue-700 transition-colors max-h-[52rem]"
				placeholder="It was a dark and stormy night..."
				aria-label="Text"
				onKeyDown={(e) => {
					if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
						e.preventDefault();
						e.currentTarget.form?.requestSubmit();
					}
				}}
			/>

			<div className="rounded-full drop-shadow-sm bg-gray-100 border border-gray-200 -mt-5 dark:bg-gray-900 dark:border-gray-800 flex focus-within:border-blue-300 dark:focus-within:border-blue-700 transition-colors">
				<input
					className="bg-transparent rounded-full py-1 px-4 focus:outline-none"
					placeholder="Garden your words..."
					onChange={handleInputChange}
					value={input}
					aria-label="Prompt"
					required
				/>

				<button
					aria-label="Submit"
					type="submit"
					className="rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors text-white size-8 md:size-10 flex items-center justify-center"
				>
					{isLoading ? <LoaderIcon /> : <SparklesIcon />}
				</button>
			</div>
		</form>
	);
}


// now include the opening and closing tag with the automatically adjusting page resize area based
// on the prompt and remember to keep it always at centre even in samll screen
