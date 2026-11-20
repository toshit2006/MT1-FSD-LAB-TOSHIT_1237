async function authentication()
{
 return "Authentication successfull";
} 
async function profile_retreieval()
{
 return "Profile Retrieval Successfull"
}
async function order_retrieval()
{
 return "Order Retrieval Successfull"
}
async function run()
{
 console.log(await authentication());
 console.log(await profile_retreieval());
 console.log(await order_retrieval());
}
run();