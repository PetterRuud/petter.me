export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","resume.json","robots.txt"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-83633fc2.js","imports":["_app/immutable/start-83633fc2.js","_app/immutable/chunks/index-2cc330bf.js","_app/immutable/chunks/singletons-f13ea139.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
