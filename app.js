// nav
function myFunction(x) {
	x.classList.toggle('change');
	const windowWidth = window.innerWidth;
	if (windowWidth > 715) {
		if (document.getElementById('myNav').style.width === '30%') {
			document.getElementById('myNav').style.width = '0%';
		} else if ((document.getElementById('myNav').style.width = '0%')) {
			document.getElementById('myNav').style.width = '30%';
		}
	} else {
		if (document.getElementById('myNav').style.width === '50%') {
			document.getElementById('myNav').style.width = '0%';
		} else if ((document.getElementById('myNav').style.width = '0%')) {
			document.getElementById('myNav').style.width = '50%';
		}
	}
}

// top
const topFunction = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

document.getElementById('toTop').addEventListener('click', topFunction);

//index

const title = document.getElementsByClassName('title');
for(let i = 0 ;i <3;i++){
    console.log(title[i]);
}

const navClick = (index) => {
	title[index].scrollIntoView();
	document.getElementById('nav-mobile').style.width = '0%';
};

// 捲動動畫
// 參考自 https://www.796t.com/article.php?id=277929

const scrollElements = document.querySelectorAll('.js-scroll');
// const a = document.querySelector('#a');
// const b = document.querySelector('#b');
// console.log('a的高度:',a.offsetHeight)
// console.log('b的高度:',b.offsetHeight)
scrollElements.forEach((el) => {
	el.style.opacity = 0;
});

const elementInView = (el, percentageScroll = 100) => {
	const elementTop = el.getBoundingClientRect().top;
	return (
		elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100) &&
		elementTop >= -el.offsetHeight 
	);
};

const displayScrollElement = (element) => {
	element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
	element.classList.remove('scrolled');
};

const handleScrollAnimation = (element) => {
	scrollElements.forEach((el) => {
		if (elementInView(el, 90)) {
			displayScrollElement(el);
		} else {
			hideScrollElement(el);
		}
	});
};

let throttleTimer = false;

const throttle = (callback, time) => {
	if (throttleTimer) return;
	// 這裡標記一下，以使函式不會重複執行
	throttleTimer = true;

	setTimeout(() => {
		// 到了指定的時間，呼叫傳入的回撥函式
		callback();
		throttleTimer = false;
	}, time);
};

// 呼叫太多次
// window.addEventListener('scroll', () => {
// 	handleScrollAnimation();
// });

window.addEventListener('scroll', () => {
	throttle(handleScrollAnimation, 250);
});



//
// $('.left').hide();
// $('.right').hide();

// $('#btn').click(function () {

// 	$('.right').show('slide', { direction: 'right' }, 5000);
// 	$('.left').show('slide', { direction: 'left' }, 5000);
//     // $( ".left" ).animate({marginLeft: 0}, 250);
// });