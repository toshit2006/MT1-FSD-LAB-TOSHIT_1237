Array.prototype.myreduce=function(a,b)
{
 for(let x of this)b=a(b,x);
 return b;
};
console.log([10,20,30].myreduce((a,b)=>a+b,0));


Array.prototype.myfilter=function(a,b=[])
{
 for(let x of this)if(a(x))b.push(x);
 return b;
};
console.log([1,2,3,4].myfilter(a=>a>2));

