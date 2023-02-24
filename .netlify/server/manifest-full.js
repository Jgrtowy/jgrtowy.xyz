export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bg.jpg","braces.svg","discord-mark-white.svg","favicon.png","github-mark-white.svg","pfp.gif","twitter-white.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png",".gif":"image/gif"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ea3b7bad.mjs","imports":["_app/immutable/entry/start.ea3b7bad.mjs","_app/immutable/chunks/index.f4439c62.mjs","_app/immutable/chunks/singletons.7fcc58b6.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.8cc3e455.mjs","imports":["_app/immutable/entry/app.8cc3e455.mjs","_app/immutable/chunks/index.f4439c62.mjs"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
