const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerset = "abcdefghijklmnopqrstuvwxyz"
const numberset = "1234567890"
const symbolset = "~!@#$%^&*()_+/"

const header=document.getElementById("header")
const totalchar = document.getElementById("total_char")
const upperinput = document.getElementById("upper-case")
const lowerinput = document.getElementById("lower-case")
const numberinput = document.getElementById("numbers")
const symbolinput = document.getElementById("symbols")


const getrandomdata=(dataset)=>
    {
    return dataset[Math.floor(Math.random()*dataset.length)];
}
const generatepassword=(password="")=>{
if(upperinput.checked)
    {
        password+=getrandomdata(upperset)
    }
    if(lowerinput.checked)
        {
            password+=getrandomdata(lowerset)
        }
        if(numberinput.checked)
            {
                password+=getrandomdata(numberset)
            }
            if(symbolinput.checked)
                {
                    password+=getrandomdata(symbolset)
                }
                

    if(password.length<totalchar.value)
        {
            return generatepassword(password);
        }
        header.innerText=truncateString(password,totalchar.value);
}

generatepassword();


document.getElementById("btn").addEventListener(
    "click",
   function()
   { generatepassword();
   }
);
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}