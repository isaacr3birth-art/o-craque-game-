(()=>{
'use strict';
const scripts=['game-v8-integrity.js','game-v8-integrity-fixes.js','game-v8-extra-core.js'];
for(const src of scripts){if(!document.querySelector(`script[src="${src}"]`)){const s=document.createElement('script');s.src=src;s.async=false;s.defer=false;document.head.appendChild(s)}}
})();
