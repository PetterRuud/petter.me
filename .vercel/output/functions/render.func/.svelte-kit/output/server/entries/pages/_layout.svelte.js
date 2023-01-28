import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-o63cus_START --><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin="${"true"}"><link href="${"https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap"}" rel="${"stylesheet"}"><!-- HEAD_svelte-o63cus_END -->`, ""}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
