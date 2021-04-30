function changeOuterLinks() {
    
    const aElements = document.gquerySelectorAll(`nav#link-list a`)
    for(let i=0; i<aElements.length; i++) 
    {
        if (a.Elements[i].innerText==='outer-link') {

            return a.Elements[i].innerText('blank')
        }
        aElements[i].style.display="flex"
        aElements[i].style.display="flex-column"
        aElements[i].style.margin="0, auto"
        aElements[i].style.border="solid, 1px, blue"
        aElements[i].style.padding="16px"
}
}

export { changeOuterLinks };