(()=>{
'use strict';
const scripts=['game-v8-extra-core.js','game-v8-integrity.js'];
for(const src of scripts){if(!document.querySelector(`script[src="${src}"]`)){const s=document.createElement('script');s.src=src;s.defer=true;document.head.appendChild(s)}}
})();
