
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




