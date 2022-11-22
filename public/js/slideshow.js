let projectIndex = 1;
projectIndex = showProjects(projectIndex);

function showProjects(index) {
    let divs = document.getElementsByClassName('project');

    if (index <= 0) {
        index = 1;
    }

    if (index > divs.length) {
        index = divs.length
    }

    for (let divIndex = 0; divIndex < divs.length; divIndex++) {
        if (divIndex == (index - 1)) {
            divs[divIndex].style.display = 'block';
        } else {
            divs[divIndex].style.display = 'none';
        }
    }  

    return index;
}

function setProject(index, op) { 
    switch (op) {
        case '+':
            projectIndex += index;
            break;

        case '=':
            projectIndex = index;
            break;                
    }

    projectIndex = showProjects(projectIndex);
}