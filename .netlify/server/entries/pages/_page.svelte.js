import { c as create_ssr_component } from "../../chunks/index.js";
const root = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body><main><div id="${"mainDiv"}" class="${"mx-2"}">
			<img src="${"/pfp.gif"}" id="${"pfp"}">
			<h1>Hello!</h1>
			<h3>I&#39;m Jgrtowy, irl known as Dawid</h3>
			<h3>I&#39;m 16yo Polish student who&#39;s currently in 2nd grade in middle school at programmer course</h3></div></main>
	<footer class="${"position-absolute bottom-0 d-flex justify-content-center w-100 gap-3"}"><button class="${"btns"}"><img src="${"/github-mark-white.svg"}" alt="${""}"></button>
		<button class="${"btns"}"><img src="${"/twitter-white.svg"}" alt="${""}"></button>
		<button class="${"btns"}"><img src="${"/discord-mark-white.svg"}" alt="${""}"></button>
		<button class="${"btns"}"><img src="${"/braces.svg"}" alt="${""}"></button></footer></body>`;
});
export {
  Page as default
};
