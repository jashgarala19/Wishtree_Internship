

 const d = new Date();
function getdate() {

   
    
return d.toLocaleDateString();


}
function gettime()
{
    return d.toLocaleTimeString();

}

module.exports ={getdate,gettime};