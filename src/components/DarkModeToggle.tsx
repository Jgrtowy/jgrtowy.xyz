import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function DarkModeToggle() {
	const [theme, setThemeState] = useState<"theme-light" | "dark">("dark");

	useEffect(() => {
		const getThemePreference = () => {
			if (
				typeof localStorage !== "undefined" &&
				localStorage.getItem("theme")
			) {
				return localStorage.getItem("theme");
			}

			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
		};

		const isDark = getThemePreference() === "dark";
		setThemeState(isDark ? "dark" : "theme-light");
	}, []);

	useEffect(() => {
		const isDark = theme === "dark";
		document.documentElement.classList[isDark ? "add" : "remove"]("dark");
	}, [theme]);

	const swapTheme = () => {
		setThemeState(theme === "theme-light" ? "dark" : "theme-light");
		localStorage.setItem(
			"theme",
			theme === "theme-light" ? "dark" : "theme-light",
		);
	};

	return (
		<Button size="icon" variant="outline" onClick={swapTheme}>
			<Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	);
}
