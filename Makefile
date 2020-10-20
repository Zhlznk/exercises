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
tree6:
		node bin/tree-6-Aggregation.js
tree7:
		node bin/tree-7-Aggregation2.js
tree8:
		node bin/tree-8-Accumulator.js