var data;
var count=0;

const btn= document.querySelector('#btn');

btn.onclick = function ()
{
    document.querySelector('#btn').innerHTML="Next";
    const promise =new Promise((resolve, reject)=>{
        const request=new XMLHttpRequest();
        request.open('GET', 'https://jsonplaceholder.typicode.com/users');
        request.onload=()=>{
            if(request.status==200)
            {
                resolve(request.response);
            }
            else 
            {
                reject(Error(resolve.statusText));
            }
        };
        request.onerror=()=>{
            reject(Error('Error Fetching data'));
        };
        request.send();
    });



promise.then((data)=>
    {
console.log(JSON.parse(data));

    }).catch()
}
