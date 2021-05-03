    let movie = document.querySelector('.input-bar input');
    let ul = document.querySelector('ul');
    let movieList = [];

    movie.addEventListener('keyup', handleEvent)
    
    function handleEvent (event){
        let name = event.target.value;
        if (event.keyCode === 13 && name!=="") {
            movieList.push(name);
            console.log(movieList);     
            event.target.value =""; 
            createUI();
        }
          }
        function handleDelete(event){
            let id = event.target.dataset.index;
            movieList.splice(id,1);
            createUI();
        }

          function createUI(){
              ul.innerHTML = "";
            movieList.forEach((film, index)=>{
                let li = document.createElement('li');
                li.classList.add('li');

                let span = document.createElement('span');
                span.innerText = film;
                
                let btn = document.createElement('button');
                btn.innerText = "❌";
                btn.setAttribute('data-index', index);

                btn.addEventListener('click', handleDelete);


                //append
                li.append(span,btn);
                ul.append(li);
            })
                
          }  
          

        