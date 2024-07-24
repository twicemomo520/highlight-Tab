const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach(function(tab, index){
    tab.addEventListener('click', (e)=>{
        
        tabs.forEach(function(tab, index){
            tab.classList.remove('active')})

        tab.classList.add('active');

        var line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + 'px';
        line.style.left = e.target.offsetLeft + 'px';
        
        all_content.forEach(function(content, index){
            content.classList.remove('active')
        })
        all_content[index].classList.add('active');
    })

})
