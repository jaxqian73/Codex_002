import { useState } from 'react';
export function useStored<T>(key:string, fallback:T, valid:(value:unknown)=>value is T) {
 const [warning,setWarning]=useState('');
 const [value,setValue]=useState<T>(()=>{try{const raw=localStorage.getItem(key);if(raw){const parsed:unknown=JSON.parse(raw);if(valid(parsed))return parsed;} }catch{/* Fall back safely when storage is unavailable or corrupted. */}return fallback;});
 function save(next:T){setValue(next);try{localStorage.setItem(key,JSON.stringify(next));setWarning('');}catch{setWarning('浏览器存储不可用：本次更改仅保留到页面关闭。');}}
 return [value,save,warning] as const;
}
