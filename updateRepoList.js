if (!globalThis.fetch) throw Error('update your node to version >=22')
const fs = require('fs')
const cp = require('child_process')

const exec = cmd => (console.log('> ', cmd), cp.execSync(cmd, { stdio: 'inherit' })) // eslint-disable-line no-sequences

const blockedRepos = ['MineflayerArmorManager', 'prismarinejs.github.io', 'prismarine-repo-actions']
const yearInMs = 31556926000

async function main (add) {
  const currentRepos = JSON.parse(fs.readFileSync('./.meta')).projects
  const repos = await fetch('https://api.github.com/orgs/prismarinejs/repos?per_page=100').then(r => r.json())
  for (const repo of repos) {
    const msSinceUpdated = Date.now() - new Date(repo.pushed_at)
    if (repo.language && ['javascript', 'typescript'].includes(repo.language.toLowerCase()) &&
      !repo.fork && msSinceUpdated < yearInMs) {
      if (!currentRepos[repo.name] && !blockedRepos.includes(repo.name)) {
        console.log('Do not have', repo.name, 'added yet', 'last updated', msSinceUpdated / (1000 * 60 * 60 * 24), 'days ago')
        if (add) {
          console.log('adding... ')
          exec(`npm run meta project import ${repo.name} ${repo.clone_url}`)
        }
      }
    }
  }
}

main(process.argv.includes('add'))
