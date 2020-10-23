install:
	npm install

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

even:
	node ./bin/games/brain-even.js

calc:
	node ./bin/games/brain-calc.js

gcd:
	node ./bin/games/brain-gcd.js

rec:
	asciinema rec