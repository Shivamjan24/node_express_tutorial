let val=0;
const value=document.getElementById("value");
const btns=document.querySelectorAll(".btn");
btns.forEach(function(item)
{
    item.addEventListener('click', function(e)
    {  e.preventDefault();
        const btn=e.target;
        if (btn.classList.contains("decrease"))
        {
            val--;
            value.textContent=val;
        }
        else if(btn.classList.contains( "increase"))
        {
            val++;
            value.textContent=val;
        }
        else
        {
            val=0;
            value.textContent=val;
        }
        if(val<0)
        {
            value.style.color="red";
        }
        if(val>0)
        {
            value.style.color="green";
        }
        if(val===0)
        {
            value.style.color="black";
        }
    })
})