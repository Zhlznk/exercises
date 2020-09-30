install:
		npm install
publish:
		npm publish --dry-run
lint:
		npx eslint .
tree4:
		node bin/tree-4-Manipulation.js
tree5:
		node bin/tree-5-Traversal.js