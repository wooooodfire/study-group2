// nav
function myFunction(x) {
	x.classList.toggle('change');
    if(document.getElementById('myNav').style.width === '30%'){
        document.getElementById('myNav').style.width = '0%';
    }
    else if(document.getElementById('myNav').style.width = '0%'){
        document.getElementById('myNav').style.width = '30%';
    }
}

// top
const topFunction = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

document.getElementById("toTop").addEventListener("click", topFunction);

//index

const title = document.getElementsByClassName('title');

const navClick = (index) => {
	title[index].scrollIntoView();
	document.getElementById('nav-mobile').style.width = '0%';
};