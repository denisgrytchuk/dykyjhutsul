//localStorage.setItem('lang','en');
//console.log(localStorage.getItem('lang'));
$(document).ready(function () {
	$(document).bind("contextmenu",function(e){
      return false;
   });
	
	var arrLang = {	
	  "en": {
        "travel":"Travel",
        "main":"Main",
        "portrait":"Portrait",
        "contact":"Contact",
        "video":"Video",
		"events":"Events",
		"timelaps":"Timelaps",
		"themvideo":"Thematic videos",
		"int20h":"Hakaton INT20H",
		"int20h_t":"Hackaton INT20H - competition for programmers, organized by the international organization BEST Kyiv",
		"ebec":"Engineering competitions EBEC",
		"ebec_t":"EBEC - the only engineering competitions organized by the international organization BEST Kyiv",
		"sport":"Sports races",
		"bigacad":"bigDATABOOM academic course",
		"bigacad_t":"This project is organized by the international organization BEST Kyiv. 30 students from technical universities around the world study course on Data Science and Machine Learning",
		"bigsoc":"bigDATABOOM social activity",
		"bigsoc_t":"In addition to the academic part, foreign students get acquainted with Ukrainian culture, get acquainted with each other and visit excursions around Kyiv",
		"mw":"Motivation weekend",
		"mw_t":"The purpose of this project is to motivate people for good and inspiring work",
		"frederiksborg":"Frederiksborg Castle",
		"frederiksborg_t":"Frederiksborg is a castle in Denmark, which was built in the 17th century as the royal residence of Christian IV. It is the largest castle of the Renaissance in Scandinavia. Now it's the National Museum of History",
		"krakow":"Krakow",
		"krakow_t":"The fascinating beauty of nothing Krakow over the Vistula. That charming sunrise",
		"malme":"Malme",
		"malme_t":"Malmö is the third largest city in Sweden. Located near the capital of Denmark - Copenhagen. Extremely quiet and clean city. The incredible beauty of modern architecture and a beautiful landscape on the Baltic Sea",
		"copenhagen":"Copenhagen",
		"copenhagen_t":"The incredible architecture of the heart of Denmark. Views of the city from a sea walk",
		"lund":"Lund",
		"lund_t":"A small town in Sweden, founded in 990. The city has the largest university in Scandinavia and the oldest Swedish botanical garden",
		"tivoli":"Tivoli",
		"tivoli_t":"The Tivoli Amusement Park is one of the oldest parks in Europe and the fourth largest in the world. Despite the large influx of people, space, ease and freedom are always felt here. From the top attractions are unrivaled views of Copenhagen",
		"carpathian":"Carpathian travel",
		"carpathian_t":"Carpathian hikes are unforgettable impressions and landscapes. You need to do some work and you will have the world open",
		"kyiv":"Kyiv",
		"kyiv_t":"The beauty of Kyiv's night is incredible. Walk it more often!",
		"name":"Name",
		"name_p":"Your name",
		"surname":"Surname",
		"surname_p":"Your surname",
		"email":"Email",
		"email_p":"Your email",
		"phone":"Phone",
		"phone_p":"Your phone",
		"subject":"Subject",
		"subject_p":"Enter subject",
		"submit":"Send",
		"feedback":"Feedback",
		"about":"About me",
		"about_t":"I am a creative and energetic photographer who never sits on the spot. Always open to new and unknown. I love to make reportage events, night city landscapes, architectural beauty and portraits",
		"awards":"Awards",
		"awards_t":"",
		"venezia":"Venezia",
		"venezia_t":"Have you ever wanted people to disappear from the streets? So here it is. The main thing is to overcome the dream and you will see the incredible.",
		"turin":"Turin",
		"turin_t":"With a day off I spent a walk Turin. Here are the photos I got.",
		"milano":"Milan",
		"milano_t":"I always have different adventures when traveling. This time I arrived very late to Milan. And I missed my bus. I didn't lose my mood and took pictures of the night city until the morning.",
		"ebecfinal":"EBEC Final Turin 2019",
		"ebecfinal_t":"Protecting projects in the Team Desinger category. It was unbelievable to watch a lot of ideas and prototypes",
		"ebecfinalo":"Official opening EBEC Final Turin 2019",
		"ebecfinalo_t":"",
		"ebecfinalc":"Official closing EBEC Final Turin 2019",
		"ebecfinalc_t":"",
		"course_copenhagen":"What the HACK? - Introduction to Cyber Security",
		"course_copenhagen_t":"An academic course in Copenhagen on Cyber Security",
	  },
	  "uk": {
		"travel":"Подорожі",
		"main":"Головна",
		"portrait":"Портрети",
		"contact":"Контакти",
		"video":"Відео",
		"events":"Події",
		"timelaps":"Таймлапси",
		"themvideo":"Тематичні відео",
		"int20h":"Хакатон INT20H",
		"int20h_t":"Хакатон INT20H - змагання для програмістів, який організовується міжнародною організацією BEST Kyiv",
		"ebec":"Інженерні змагання EBEC",
		"ebec_t":"EBEC - єдині в цілій Європі інженерні змагання, які організовуються міжнародною організацією BEST Kyiv",
		"sport":"Спортивні забіги",
		"bigacad":"bigDATABOOM академічний курс",
		"bigacad_t":"Даний проект організований міжнародною організацією BEST Kyiv. 30 студентів із технічних університетів із усього світу проходять курс по Data Science і машинного навчання",
		"bigsoc":"bigDATABOOM соціальні активності",
		"bigsoc_t":"Окрім академічної частини, іноземні студенти пізнають українську культуру, знайомляться один з одним та відвідують екскурсії по Києву",
		"mw":"Мотиваційні вихідні",
		"mw_t":"Перед хорошим початком роботи потрібно хороший старт. Метою цього проекту є мотивація людей для хорошої та натхненної роботи",
		"frederiksborg":"Замок Фредеріксборг",
		"frederiksborg_t":"Фредеріксборг - це замок в Данії, який був побудований в XVII ст. як королівська резиденція Кристіана IV. Він є найбільшим замком епохи відродження в Скандинавії. Тепер це Національний музей історії ",
		"krakow":"Краків",
		"krakow_t":"Захоплююча краса нічого Кракова над Віслою. Та чарівний схід сонця",
		"malme":"Мальме",
		"malme_t":"Мальме це третє за величиною місто у Швеції. Знаходиться поряд із столицею Данії - Копенгагеном. Надзвичайно спокійне і чисте місто. Неймовірна краса сучасної архітектури і гарний краєвид на Балтійське море",
		"copenhagen":"Копенгаген",
		"copenhagen_t":"Неймовірна ахітектура серця Данії. Краєвиди міста із морської прогулянки",
		"lund":"Лунд",
		"lund_t":"Невеличке місто в Швеції, яке засноване в 990 році. В місті знаходиться найбільше в Скандинавії університет та найстаріший у Швеції ботанічний сад",
		"tivoli":"Тіволі",
		"tivoli_t":"Парк розваг Тіволі - це один із старіших парків в Європі і четвертий по величині. Незважаючи на великий наплив людей, тут завжди відчувається простір, легкість і свобода. Із вершин атракціонів відкривається неперевершені краєвиди Копенгагена",
		"carpathian":"Карпатські подорожі",
		"carpathian_t":"Карпатські походи - це незабутні враження та краєвиди. Потрібно докласти деякі зусилля і перед вами відкриється весь світ",
		"kyiv":"Київ",
		"kyiv_t":"Краса нічного Києва є неймовірною. Частіше гуляйте ним!",
		"name":"Ім/'я",
		"name_p":"Введіть ваше ім/'я",
		"surname":"Прізвище",
		"surname_p":"Введіть ваше прізвище",
		"email":"Електронна пошта",
		"email_p":"Введіть ваш email",
		"phone":"Номер телефону",
		"phone_p":"Введіть ваш номер телефону",
		"subject":"Текст",
        "subject_p":"Введіть повідомлення",
        "submit":"Надіслати",
        "feedback":"Зворотній зв/'зок",
        "about":"Про мене",
        "about_t":"Я креативний і енергійний фотограф, який ніколи не сидить на місці. Завжди відкритий до нового і невідомого. Обожнюю робити репортажні зйомки подій, нічні пейзажі міст, красу архітектури та портрети",
        "awards":"Нагороди",
        "awards_t":"",
		"venezia":"Венеція",
		"venezia_t":"Чи ви коли-небудь хотіли, щоб люди пропали з вулиць? Так ось, це можливо. Головне перебороти сон і ви побачите неймовірне.",
		"turin":"Турін",
		"turin_t":"Маючи цілий вихідний день я витратив на прогулянку містом Турін. Ось які фотографії в мене получилися.",
		"milano":"Мілан",
		"milano_t":"Я завжди маю різні пригоди, коли подорожую. Цього разу я прилетів дуже пізно в Мілан. І я пропустив свій автобус. Я не втратив настрій і фотографував нічне місто до самого ранку.",
		"course_copenhagen":"",
		"course_copenhagen_t":"",
		"ebecfinal":"EBEC Final Turin 2019",
		"ebecfinal_t":"Захист проектів в категорії Team Desinger. Це було неімовірно спостерігати за величезною кількістю ідей і прототипів",
		"ebecfinalo":"Офіційне відкриття EBEC Final Turin 2019",
		"ebecfinalo_t":"",
		"ebecfinalc":"Офіційне закриття EBEC Final Turin 2019",
		"ebecfinalc_t":"",
		"course_copenhagen":"What the HACK? - Introduction to Cyber Security",
		"course_copenhagen_t":"Академічний курс в Копенгагені на тематику кібер захисту",
	  },
	  "fr": {

	  },
	  "pl": {
	  }
	};
	
    (function () {
        var lang = localStorage.getItem('lang');
		if(lang==null){
			lang='en';
		}
        $('a.add_lang').each(
            function () {
                var href = this.href;
                this.href = href + lang;
            }
        );

        $('form').attr('action', '/contact/' + lang);

        if($('.main').attr('title')!=undefined){
            let index = '#' + $('.main').attr('title');
            //console.log(index);
            $('html, body').animate({
                //scrollTop: $("#alb2").offset().top
                scrollTop: $(index).offset().top
            }, 2000);
        }

		$('.trans').each(function(index, element){
				//alert($(this).attr('key'));
				$(this).text(arrLang[lang][$(this).attr('key')])
			});
         /*
        $('a.add').each(
            function () {
                var href = this.href;
                this.href = href + lang + '/' + this.title;
                console.log(this.href);
            }
        );*/
    })();



    

	$(function(){
		$('.lang div').on('click',function () {
			var last_lang = localStorage.getItem('lang');
			
			//console.log(last_lang);
			if(last_lang!=undefined){
				localStorage.removeItem('lang');
			}
			localStorage.setItem('lang',this.id);
			var lang = this.id;
			//alert(lang);
			$('.trans').each(function(index, element){
				//alert($(this).attr('key'));
				$(this).text(arrLang[lang][$(this).attr('key')])
			});
			//location.reload();
		});
	});

    $('.lang div').mouseenter(function (e) {
        $(this).css({opacity:'1'});
        //alert(1);
    });

    $('.lang div').mouseleave(function (e) {
        $(this).css({opacity:'0.15'});
        //alert(1);
    });

	
	
});