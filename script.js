const images = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
];
const n = images.length ;
const flexcontainer = document.getElementById('flex-container');
const leftbtn = document.getElementById('left-btn');
const rightbtn = document.getElementById('right-btn');

const containerWidth = 80;
const flexContainerWidth = n*containerWidth;
flexcontainer.style.width = flexContainerWidth;

for(let i = 0 ; i < n  ; i++){
    const newImg  = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add('img-style');
    flexcontainer.appendChild(newImg);
}
let curPosition = 0;
leftbtn.addEventListener('click',()=>{
    if(curPosition > 0){
        curPosition--;
        
    }
    else{
        curPosition = n-1;
    }
    showImg();
})


rightbtn.addEventListener('click',()=>{
    if(curPosition < n-1){
        curPosition++;
        
    }else{
        curPosition = 0;
    }
    showImg();
})

function showImg(){
    const translateXDistance = -curPosition * containerWidth;
    flexcontainer.style.transform = `translateX(${translateXDistance}vw)`;
}