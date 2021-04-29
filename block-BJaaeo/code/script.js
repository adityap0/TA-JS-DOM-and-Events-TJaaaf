let root = document.querySelector('.input-numbers');
let opr = document.querySelector('.input-buttons');
let screen = document.querySelector('.input-screen');
let final = document.querySelector('.equal');

root.addEventListener('click', clickHandlenum1);
function clickHandlenum1(event){
    let a = Number(event.target.innerText);

    console.log(`first num ${a}`);

    opr.addEventListener('click', handleOpr)
    function handleOpr(event)
    {
        let opr = event.target.innerText;
        console.log(`perform ${opr}`);

        root.addEventListener('click', clickHandlenum2);
        function clickHandlenum2(event){
            let c = Number(event.target.innerText);
            console.log(`second num ${c}`);
            let x = eval(a+opr+c);
            console.log(`the final ans is ${x}`);
            
        }
    }

}


