/****** section_one  ****************/
const section_one = document.querySelector('#section_one')
const section_menu = document.querySelector('#section_menu')

function hiden_section_one() {
  section_one.classList.toggle('hiden')
  section_menu.classList.toggle('hiden')
}

const imagesSectionOne = document.querySelector('#images_section_one')

let index = -1

let urls = [
  "https://res.cloudinary.com/di9oiqvom/image/upload/v1677941973/Agni/imagembg1_jjbtal.jpg",
  "https://res.cloudinary.com/di9oiqvom/image/upload/v1677941974/Agni/imagembg2_dqyaps.jpg",
  "https://res.cloudinary.com/di9oiqvom/image/upload/v1677941974/Agni/imagembg3_jnr8ch.jpg",
  "https://res.cloudinary.com/di9oiqvom/image/upload/v1677941974/Agni/imagembg4_yzoaz7.jpg"
]

RemoveClass()
ChangeImg()

function ChangeImg() {
  index++
  if(index > urls.length-1){index = 0}
  imagesSectionOne.setAttribute('src', urls[index])
  imagesSectionOne.classList.add("scale")
  setTimeout(ChangeImg, 4001)
}

function RemoveClass() {
  imagesSectionOne.classList.remove("scale")
  setTimeout(RemoveClass, 4000)
}



/******* Section_Two ***************/

const menu = document.querySelector('#menu')

window.addEventListener('scroll', function () {
  ShowMenu()
})

menu.style.opacity = 0

function ShowMenu() {
  if (window.scrollY >= 1500) {
    menu.style.opacity = 1
  } else {
    menu.style.opacity = (window.scrollY-500)/500
  }
}

function selectCard1 () {
  const card1 =  document.getElementById('card1')
  card1.classList.toggle('selected')

  const text1 = document.getElementById('text1')
  if (text1.innerHTML.length == 0) {
    text1.innerHTML = 'Tornar os ambientes mais funcionais e produtivos.'
  } else {
    text1.innerHTML = ''
  }
}

function selectCard2 () {
  const card1 =  document.getElementById('card2');
  card1.classList.toggle('selected')

const text2 = document.getElementById('text2')
  if (text2.innerHTML.length == 0) {
    text2.innerHTML = 'Evitar refazer obras por falta de planejamento ou acompanhamento inadequado.'
  } else {
    text2.innerHTML = ''
  }
}

function selectCard3 () {
  const card3 =  document.getElementById('card3');
  card3.classList.toggle('selected')

const text3 = document.getElementById('text3')
  if (text3.innerHTML.length == 0) {
    text3.innerHTML = 'Organizar melhor os espaços, gerando sensação de harmonia, conforto e bem estar.'
  } else {
    text3.innerHTML = ''
  }
}

function selectCard4 () {
  const card4 =  document.getElementById('card4');
  card4.classList.toggle('selected')

  const text4 = document.getElementById('text4')
  if (text4.innerHTML.length == 0) {
    text4.innerHTML = 'Economizar tempo, ter listas de compras personalizadas e indicação de fornecedores.'
  } else {
    text4.innerHTML = ''
  }
}

function selectCard5 () {
  const card5 =  document.getElementById('card5');
  card5.classList.toggle('selected')

  const text5 = document.getElementById('text5')
  if (text5.innerHTML.length == 0) {
    text5.innerHTML = 'Projetar ambientes de acordo com as normas da AssociaçãoBrasileira de Normas Técnicas (ABNT), seguindo processos de segurança rígidos.'
  } else {
    text5.innerHTML = ''
  }
}

function selectCard6 () {
  const card6 =  document.getElementById('card6');
  card6.classList.toggle('selected')

  const text6 = document.getElementById('text6')
  if (text6.innerHTML.length == 0) {
    text6.innerHTML = 'Atrair mais clientes, alinhando o estilo da loja ao tipo do produto e a identidade da marca.'
  } else {
    text6.innerHTML = ''
  }
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
const ExpertImg = document.querySelector('#expert');

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.75 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });

  console.log(ExpertImg.offsetTop)

  if(windowTop < 2000){
    ExpertImg.classList.remove("animate");
  }
};

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
})