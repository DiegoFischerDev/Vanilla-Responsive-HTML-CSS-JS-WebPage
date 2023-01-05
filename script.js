/****** section_one  ****************/
const section_one = document.querySelector('#section_one')
const section_menu = document.querySelector('#section_menu')

function hiden_section_one() {
  section_one.classList.toggle('hiden')
  section_menu.classList.toggle('hiden')
}


/******* Section_four **************/
$(".option").click(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});


/******* Section Eight ************/

const arrow_down_faq_1 = document.querySelector('#arrow_down_faq_1')
const arrow_up_faq_1 = document.querySelector('#arrow_up_faq_1')
const answer_faq_1 = document.querySelector('#answer_faq_1')

function faq_1() {
  arrow_down_faq_1.classList.toggle('hiden')
  arrow_up_faq_1.classList.toggle('hiden')
  answer_faq_1.classList.toggle('hiden')
}

const arrow_down_faq_2 = document.querySelector('#arrow_down_faq_2')
const arrow_up_faq_2 = document.querySelector('#arrow_up_faq_2')
const answer_faq_2 = document.querySelector('#answer_faq_2')

function faq_2() {
  arrow_down_faq_2.classList.toggle('hiden')
  arrow_up_faq_2.classList.toggle('hiden')
  answer_faq_2.classList.toggle('hiden')
}

const arrow_down_faq_3 = document.querySelector('#arrow_down_faq_3')
const arrow_up_faq_3 = document.querySelector('#arrow_up_faq_3')
const answer_faq_3 = document.querySelector('#answer_faq_3')

function faq_3() {
  arrow_down_faq_3.classList.toggle('hiden')
  arrow_up_faq_3.classList.toggle('hiden')
  answer_faq_3.classList.toggle('hiden')
}

const arrow_down_faq_4 = document.querySelector('#arrow_down_faq_4')
const arrow_up_faq_4 = document.querySelector('#arrow_up_faq_4')
const answer_faq_4 = document.querySelector('#answer_faq_4')

function faq_4() {
  arrow_down_faq_4.classList.toggle('hiden')
  arrow_up_faq_4.classList.toggle('hiden')
  answer_faq_4.classList.toggle('hiden')
}

const arrow_down_faq_5 = document.querySelector('#arrow_down_faq_5')
const arrow_up_faq_5 = document.querySelector('#arrow_up_faq_5')
const answer_faq_5 = document.querySelector('#answer_faq_5')

function faq_5() {
  arrow_down_faq_5.classList.toggle('hiden')
  arrow_up_faq_5.classList.toggle('hiden')
  answer_faq_5.classList.toggle('hiden')
}

const arrow_down_faq_6 = document.querySelector('#arrow_down_faq_6')
const arrow_up_faq_6 = document.querySelector('#arrow_up_faq_6')
const answer_faq_6 = document.querySelector('#answer_faq_6')

function faq_6() {
  arrow_down_faq_6.classList.toggle('hiden')
  arrow_up_faq_6.classList.toggle('hiden')
  answer_faq_6.classList.toggle('hiden')
}

const arrow_down_faq_7 = document.querySelector('#arrow_down_faq_7')
const arrow_up_faq_7 = document.querySelector('#arrow_up_faq_7')
const answer_faq_7 = document.querySelector('#answer_faq_7')

function faq_7() {
  arrow_down_faq_7.classList.toggle('hiden')
  arrow_up_faq_7.classList.toggle('hiden')
  answer_faq_7.classList.toggle('hiden')
}

const arrow_down_faq_8 = document.querySelector('#arrow_down_faq_8')
const arrow_up_faq_8 = document.querySelector('#arrow_up_faq_8')
const answer_faq_8 = document.querySelector('#answer_faq_8')

function faq_8() {
  arrow_down_faq_8.classList.toggle('hiden')
  arrow_up_faq_8.classList.toggle('hiden')
  answer_faq_8.classList.toggle('hiden')
}

const arrow_down_faq_9 = document.querySelector('#arrow_down_faq_9')
const arrow_up_faq_9 = document.querySelector('#arrow_up_faq_9')
const answer_faq_9 = document.querySelector('#answer_faq_9')

function faq_9() {
  arrow_down_faq_9.classList.toggle('hiden')
  arrow_up_faq_9.classList.toggle('hiden')
  answer_faq_9.classList.toggle('hiden')
}


/****** Scroll Reveal  ********/
/* Vamos animar todos os itens na tela que tiverem o atributo data-anime  https://www.youtube.com/watch?v=Bhpw7d_NNYM */


const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
})