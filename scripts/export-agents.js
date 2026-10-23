import {agents,rules} from '../src/data.js';
import {mkdir,writeFile} from 'node:fs/promises';
await mkdir('public/agents',{recursive:true});
for(const a of agents) await writeFile(`public/agents/${a.id}.md`,`${a.soul}\n\n${a.skill}\n\n${rules}\n`);
console.log('Exported six portable agent dossiers from src/data.js.');
