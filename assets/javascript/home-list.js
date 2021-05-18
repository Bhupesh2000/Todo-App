
// Add classes to different categories
const categoryBoxList=document.querySelectorAll('.category-box');

categoryBoxList.forEach(cate =>{
    let text=cate.querySelector('p').textContent;
    let newClass='category-box-'+ text.toLowerCase();
    cate.classList.add(newClass);
})

// Convert first letter of description to upper-case
const workList=document.querySelectorAll('.work');
workList.forEach(work=>{
    let workText=work.textContent;
    let firstWord=workText[0].toUpperCase();
    work.textContent=firstWord+workText.slice(1);
})

// Set up content for no deadline
const dateList=document.querySelectorAll('.details-date');
dateList.forEach(date=>{
    if(date.textContent==''){
        date.textContent='No Deadline'
    }
})

// transform text to line-through when checkbox is checked
const checkboxList=document.querySelectorAll('.checkbox');
for(let i=0;i<checkboxList.length;i++){
    checkboxList[i].setAttribute('id',i);
}
checkboxList.forEach(checkbox=>{
    let box=checkbox.getElementsByTagName('input');
    box[0].addEventListener('click',()=>{
        let listDiv=checkbox.parentElement;
        let textdiv=listDiv.querySelector('.details');
        if(box[0].checked==true){
            textdiv.classList.add('line-through')
        }
        if(box[0].checked==false){
            textdiv.classList.remove('line-through')
        }
    })
})




const deleteButton=document.getElementById('delete-button');
deleteButton.addEventListener('click',()=>{
    checkboxList.forEach(checkbox=>{
        let box=checkbox.getElementsByTagName('input');
        // console.log(box);
        if(box[0].checked==true){
            // console.log(checkbox.getElementsByTagName('input'))
            let parentDiv=checkbox.parentElement;

            let id=parentDiv.getElementsByClassName('id-container')[0].textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
            // console.log(id);
            // checkbox.innerHTML='<a href="/delete-entry/?id='+id+'"><input type="checkbox"></a>'
            // console.log(box[0]);
            let href='/delete-entry/?id='+id
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET",href, true);
            xhttp.send();
            window.location.reload(true); 
        }
    })
})