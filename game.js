export function adjacent(a,b,size=4){return a>=0&&b>=0&&a<size*size&&b<size*size&&Math.abs(a%size-b%size)+Math.abs(Math.floor(a/size)-Math.floor(b/size))===1}
export function extendPath(path,next,size=4){if(path.includes(next)||!adjacent(path.at(-1),next,size))return path;return [...path,next]}
export function solved(path,goal,maxSteps){return path.at(-1)===goal&&path.length-1<=maxSteps}
