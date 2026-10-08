import sharp from 'sharp';
import fs from 'node:fs';
import products from '../src/data/products.json' with {type:'json'};
const names=['hero','body','home',...products.map(p=>p.slug)];
for(const name of names){const editorial=['hero','body','home'].includes(name);await sharp('public/images/'+name+'.png').resize({width:editorial?1536:800,withoutEnlargement:true}).webp({quality:84}).toFile('public/images/'+name+'.webp');}
for(const file of fs.readdirSync('public/images'))if(file.endsWith('.png'))fs.unlinkSync('public/images/'+file);
for(const file of ['src/components/store.tsx','src/components/pages.tsx','src/data/products.json'])fs.writeFileSync(file,fs.readFileSync(file,'utf8').replaceAll('.png','.webp'));
