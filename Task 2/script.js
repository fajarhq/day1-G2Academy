const pages = ["careerPage", "joinPage"]

function changePageTo(idPage) {
    for (let i = 0; i < pages.length; i++) {
        let page = document.getElementById(pages[i]).classList;
        if(idPage == pages[i]){
            page.remove('hide-page')
            continue
        }
        page.add('hide-page')
    } 
}
changePageTo("careerPage")