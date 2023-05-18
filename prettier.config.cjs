/** @type {import("prettier").Config} */
const config = {
	arrowParens: "always",
	bracketSpacing: true,
	endOfLine: "lf",
	printWidth: 80,
	proseWrap: "preserve",
	quoteProps: "as-needed",
	semi: true,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: "none",
	useTabs: true,
	plugins: [require.resolve("prettier-plugin-tailwindcss")]
};

module.exports = config;
