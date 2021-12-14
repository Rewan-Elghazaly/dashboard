//dropmenu
let avatar = document.querySelector('.avatar'),
    notification = document.querySelector('.notification');
dropmenue(avatar)
dropmenue(notification)

function dropmenue(selector){
    selector.addEventListener("click",()=>{
        let dropmenu = selector.querySelector('.dropdown-menu');
        dropmenu.classList.contains('active') ? dropmenu.classList.remove('active') : dropmenu.classList.add('active'); 
    })
}
//sidebar toggle
let sidebar = document.querySelector('.sidebar'),
    bars = document.querySelector('.bars');
bars.addEventListener("click",()=>{
    sidebar.classList.contains('active') ? sidebar.classList.remove('active') :  sidebar.classList.add('active');
})


