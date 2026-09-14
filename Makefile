install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npm exec eslint
test:
	npm run test
test-coverage:
	npm run test-coverage