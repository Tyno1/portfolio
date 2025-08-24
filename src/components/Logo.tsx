import type React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
	variant?: "full" | "short" | "squared";
	className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = "full", className = "" }) => {
	const logoContent = (
		<>
			{variant === "full" && (
				<div className={`font-bold text-xl lg:text-2xl ${className}`}>
					<span className="text-[#00ff88]">tony</span>
					<span className="text-white">the</span>
					<span className="text-[#00ff88]">dev</span>
				</div>
			)}

			{variant === "squared" && (
				<div className={`font-bold text-2xl lg:text-3xl ${className}`}>
					<span className="text-[#00ff88]">t</span>
					<span className="text-white text-sm lg:text-base align-top">²</span>
					<span className="text-white">d</span>
				</div>
			)}

			{variant === "short" && (
				<div className={`font-bold text-2xl lg:text-3xl ${className}`}>
					<span className="text-[#00ff88]">t</span>
					<span className="text-white">dd</span>
				</div>
			)}
		</>
	);

	return (
		<Link
			to="/"
			className="cursor-pointer hover:scale-105 transition-transform duration-200"
			aria-label="Go to home page"
		>
			{logoContent}
		</Link>
	);
};

export default Logo;
