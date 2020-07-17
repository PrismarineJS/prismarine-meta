# prismarine-meta

[![Try it on gitpod](https://img.shields.io/badge/try-on%20gitpod-brightgreen.svg)](https://gitpod.io/#https://github.com/PrismarineJS/prismarine-meta)

Make it easy to do chores and maintenance work using the [meta](https://github.com/mateodelnorte/meta) package

## Usage

Install :
```
npm install
npm run meta git update
```

Add a new package :
```
npm run meta project import prismarine-something https://github.com/PrismarineJS/prismarine-something.git
```

Do git actions on all repos : https://github.com/mateodelnorte/meta-git

Prefer using `node_modules/.bin/meta` for better compatibility

Example `node_modules/.bin/meta git checkout -b my_new_branch`

https://github.com/mateodelnorte/loop

Example :
```
node_modules/.bin/meta loop --include-only diamond-square,mcdevs-wiki-extractor,minecraft-chunk-dumper,minecraft-wiki-extractor,mineflayer-navigate,node-minecraft-wrap,prismarine-biome,prismarine-entity,prismarine-recipe "mkdir -p .github/workflows && cp -R ../prismarine-template/.github/workflows/* .github/workflows"
```


