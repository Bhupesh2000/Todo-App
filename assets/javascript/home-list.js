const categoryBoxList=document.querySelectorAll('.category-box');

categoryBoxList.forEach(cate =>{
    let text=cate.querySelector('p').textContent;
    let newClass='category-box-'+ text.toLowerCase();
    cate.classList.add(newClass);
})

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
