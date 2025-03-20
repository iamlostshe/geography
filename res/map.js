ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 2
    }, {
        searchControlProvider: 'yandex#search'
    });

    var color1  = '#F8B195'; // Цвет чая
    var color2  = '#F67280'; // Цвет конфет
    var color3  = '#C06C84'; // Цвет хлеба
    var color4  = '#6C5B7B'; // Цвет макарон
    var color5  = '#355C7D'; // Цвет масла

    var color6  = '#FF9AA2'; // Цвет мяса
    var color7  = '#FFB7B2'; // Цвет молока растительного
    var color8  = '#FFDAC1'; // Цвет муки и круп
    var color9  = '#E2F0CB'; // Цвет масла сливочного
    var color10 = '#B5EAD7'; // Цвет сахара
    var color11 = '#C7CEEA'; // Цвет консерв
    var color12 = '#A0CED9'; // Цвет рыбы

    var PotrebTea1 = new ymaps.Placemark([57.609244, 40.377197], {
        balloonContent: 'Ориентированна на потребителя, чаеразвесовочная, Иван-чай Самокат с малиной, в пирамидках, 15 пакетиков, ООО Агропарк Ясенево'
    }, {
        preset: 'islands#icon',
        iconColor: color1
    });

    var PotrebTea2 = new ymaps.Placemark([52.586005, 39.487101], {
        balloonContent: 'Ориентированна на потребителя, чаеразвесовочная, Чай ФрутоНяня, яблоко, ромашка и фенхель, АО Прогресс'
    }, {
        preset: 'islands#icon',
        iconColor: color1
    });

    var PotrebTea3 = new ymaps.Placemark([56.860585, 53.224291], {
        balloonContent: 'Ориентированна на потребителя, чаеразвесовочная, Напиток чайный Самокат гречишный, ООО Галеон'
    }, {
        preset: 'islands#icon',
        iconColor: color1
    });

    var PotrebTea4 = new ymaps.Placemark([56.838573, 53.159047], {
        balloonContent: 'Ориентированна на потребителя, чаеразвесовочная, Чёрный чай Richard Energy, с мате, каламанси, вербеной и гуараной, в сашетах, 20 пакетиков, ООО МАЙ'
    }, {
        preset: 'islands#icon',
        iconColor: color1
    });

    var PotrebTea5 = new ymaps.Placemark([59.793582, 30.649386], {
        balloonContent: 'Ориентированна на потребителя, чаеразвесовочная, Чай Tess Earl Grey, чёрный, листовой, ООО Орими'
    }, {
        preset: 'islands#icon',
        iconColor: color1
    });

    var PotrebCondit1 = new ymaps.Placemark([53.558102, 49.298941], {
        balloonContent: 'Ориентированна на потребителя, кондитерская, Батончик FitnesShock No Sugar Bar 20% протеина, арахис и солёная карамель, ООО Фитнес Десерты'
    }, {
        preset: 'islands#icon',
        iconColor: color2
    });

    var PotrebCondit2 = new ymaps.Placemark([55.899956, 37.540147], {
        balloonContent: 'Ориентированна на потребителя, кондитерская, Конфета Самокат протеиновая, сливочная карамель, ООО Здоровая Планета'
    }, {
        preset: 'islands#icon',
        iconColor: color2
    });

    var PotrebCondit3 = new ymaps.Placemark([55.675245, 37.617321], {
        balloonContent: 'Ориентированна на потребителя, кондитерская, Батончик Самокат шоколадно-ореховый, низкоуглеводный, ООО Боб'
    }, {
        preset: 'islands#icon',
        iconColor: color2
    });

    var PotrebCondit4 = new ymaps.Placemark([55.538295, 37.581083], {
        balloonContent: 'Ориентированна на потребителя, кондитерская, Батончик Самокат шоколадный, с кешью и вишней, ООО ДУ ИТ'
    }, {
        preset: 'islands#icon',
        iconColor: color2
    });

    var PotrebCondit5 = new ymaps.Placemark([56.499707, 84.994613], {
        balloonContent: 'Ориентированна на потребителя, кондитерская, Панкейк Basker Wheels с малиновой начинкой, ООО КДВ Групп'
    }, {
        preset: 'islands#icon',
        iconColor: color2
    });

    var PotrebHleb1 = new ymaps.Placemark([55.745260, 37.685575], {
        balloonContent: 'Ориентированна на потребителя, хлебопекарная, Хлеб ржано-пшеничный Самокат Деревенский, ООО Брецель УК'
    }, {
        preset: 'islands#icon',
        iconColor: color3
    });

    var PotrebHleb2 = new ymaps.Placemark([55.669121, 37.632544], {
        balloonContent: 'Ориентированна на потребителя, хлебопекарная, Хлеб зерновой Коломенский Ржаной край, в нарезке, ЗАО Булочно-кондитерский комбинат Коломенский'
    }, {
        preset: 'islands#icon',
        iconColor: color3
    });

    var PotrebHleb3 = new ymaps.Placemark([59.905330, 30.327555], {
        balloonContent: 'Ориентированна на потребителя, хлебопекарная, Хлеб зерновой Хлебный дом Геркулес нарезка, ООО Хлебный дом'
    }, {
        preset: 'islands#icon',
        iconColor: color3
    });

    var PotrebHleb4 = new ymaps.Placemark([47.771195, 40.150857], {
        balloonContent: 'Ориентированна на потребителя, хлебопекарная, Пшеничный хлеб Аютинский хлеб, тостовый, нарезка, длительного хранения, ИП Гуковская М. Ю.'
    }, {
        preset: 'islands#icon',
        iconColor: color3
    });

    var PotrebHleb5 = new ymaps.Placemark([55.659612, 37.550522], {
        balloonContent: 'Ориентированна на потребителя, хлебопекарная, Ржано-пшеничный хлеб Черёмушки, Зерновик, мультизлаковый, нарезка, ОАО Кондитерско-булочный комбинат Черёмушки'
    }, {
        preset: 'islands#icon',
        iconColor: color3
    });

    var PotrebMakaron1 = new ymaps.Placemark([51.768205, 55.097000], {
        balloonContent: 'Ориентированна на потребителя, макаронная, , '
    }, {
        preset: 'islands#icon',
        iconColor: color4
    });

    var PotrebMakaron2 = new ymaps.Placemark([56.165905, 36.991680], {
        balloonContent: 'Ориентированна на потребителя, макаронная, Макароны Barilla джирандоле, №34, ООО Барилла Рус'
    }, {
        preset: 'islands#icon',
        iconColor: color4
    });

    var PotrebMakaron3 = new ymaps.Placemark([51.250203, 58.488392], {
        balloonContent: 'Ориентированна на потребителя, макаронная, Макароны Самокат Fusilli цельнозерновые, спирали, ООО Агро-Альянс'
    }, {
        preset: 'islands#icon',
        iconColor: color4
    });

    var PotrebMakaron4 = new ymaps.Placemark([51.649763, 35.601462], {
        balloonContent: 'Ориентированна на потребителя, макаронная, Макароны Самокат без глютена, из кукурузно-рисовой муки, спагетти №3, ООО Макаронная фабрика Америя'
    }, {
        preset: 'islands#icon',
        iconColor: color4
    });

    var PotrebMaslo1 = new ymaps.Placemark([44.987947, 41.083934], {
        balloonContent: 'Ориентированна на потребителя, маслодельная, Масло подсолнечное Благо рафинированное, дезодорированное, ООО Компания Благо'
    }, {
        preset: 'islands#icon',
        iconColor: color5
    });

    var PotrebMaslo2 = new ymaps.Placemark([45.001791, 41.114902], {
        balloonContent: 'Ориентированна на потребителя, маслодельная, Подсолнечное масло Слобода, рафинированное, дезодорированное, АО Эфко'
    }, {
        preset: 'islands#icon',
        iconColor: color5
    });

    var PotrebMaslo3 = new ymaps.Placemark([51.858700, 40.773794], {
        balloonContent: 'Ориентированна на потребителя, маслодельная, Подсолнечное масло Самокат, рафинированное, ООО Благо-Эртиль'
    }, {
        preset: 'islands#icon',
        iconColor: color5
    });

    var Meat1 = new ymaps.Placemark([56.054232, 37.408048], {
        balloonContent: 'Ориентированны и на потребителя и на сырье, мясная, Сыровяленая колбаса Cortador, Итальянская, нарезка, ООО Мясокомбинат Эко'
    }, {
        preset: 'islands#icon',
        iconColor: color6
    });

    var Meat2 = new ymaps.Placemark([55.663274, 37.269075], {
        balloonContent: 'Ориентированны и на потребителя и на сырье, мясная, Запечённая буженина Мясницкий ряд, с чесноком, ООО МПЗ Мясницкий Ряд'
    }, {
        preset: 'islands#icon',
        iconColor: color6
    });

    var Meat3 = new ymaps.Placemark([52.589862, 41.363301], {
        balloonContent: 'Ориентированны и на потребителя и на сырье, мясная, Карбонад свиной Слово мясника Праздничный в брусничном маринаде с кунжутом, охлаждённый, ООО Тамбовский Бекон'
    }, {
        preset: 'islands#icon',
        iconColor: color6
    });

    var Meat4 = new ymaps.Placemark([55.722925, 37.390093], {
        balloonContent: 'Ориентированны и на потребителя и на сырье, мясная, Сырокопчёная колбаса Рублёвский, Рублёвская, полусухая, ООО Торговый Дом Рублевский'
    }, {
        preset: 'islands#icon',
        iconColor: color6
    });

    var Meat5 = new ymaps.Placemark([55.814437, 37.066566], {
        balloonContent: 'Ориентированны и на потребителя и на сырье, мясная, Ассорти сырокопчёных колбас Велком, Римини, салями и Сальчичон, нарезка, ООО Мясокомбинат Павловская Слобода'
    }, {
        preset: 'islands#icon',
        iconColor: color6
    });

    var Milk1 = new ymaps.Placemark([44.658769, 40.395002], {
        balloonContent: 'Ориентированны и на потребителя и на сырье, молочная, Адыгейский сыр Самокат, мягкий, из козьего молока, 18%, ООО Мирный-Адыгея'
    }, {
        preset: 'islands#icon',
        iconColor: color7
    });

    var Milk2 = new ymaps.Placemark([53.170437, 44.963953], {
        balloonContent: 'Ориентированны и на потребителя и на сырье, молочная, Творог Самокат безлактозный, 4,5%, АО Молочный комбинат Пензенский'
    }, {
        preset: 'islands#icon',
        iconColor: color7
    });

    var Milk3 = new ymaps.Placemark([56.371286, 38.350912], {
        balloonContent: 'Ориентированны и на потребителя и на сырье, молочная, Кефир Самокат малина и гранат, 2,5%, ООО Фёдоровские молочные продукты'
    }, {
        preset: 'islands#icon',
        iconColor: color7
    });

    var Milk4 = new ymaps.Placemark([55.885301, 37.544952], {
        balloonContent: 'Ориентированны и на потребителя и на сырье, молочная, Молоко Домик в деревне пастеризованное, 2,5%, АО Вимм-Билль-Данн'
    }, {
        preset: 'islands#icon',
        iconColor: color7
    });

    var Milk5 = new ymaps.Placemark([55.707894, 36.183191], {
        balloonContent: 'Ориентированны и на потребителя и на сырье, молочная, Молоко Рузское, 3,2-4,0%, цельное, пастеризованное, АО Рузское Молоко'
    }, {
        preset: 'islands#icon',
        iconColor: color7
    });

    var SirieMyka1 = new ymaps.Placemark([52.759172, 41.467947], {
        balloonContent: 'Ориентированны на сырье, мукомольно крупяная, Рис басмати Самокат, ароматный, ООО Ресурс'
    }, {
        preset: 'islands#icon',
        iconColor: color8
    });

    var SirieMyka2 = new ymaps.Placemark([60.016892, 30.309023], {
        balloonContent: 'Ориентированны на сырье, мукомольно крупяная, Хлопья овсяные Сташевское из голозёрного овса, без глютена, ООО Сташевское  Био'
    }, {
        preset: 'islands#icon',
        iconColor: color8
    });

    var SirieMyka3 = new ymaps.Placemark([59.886257, 30.324690], {
        balloonContent: 'Ориентированны на сырье, мукомольно крупяная, Мука Makfa пшеничная, хлебопекарная, высший сорт, АО Макфа'
    }, {
        preset: 'islands#icon',
        iconColor: color8
    });

    var SirieMyka4 = new ymaps.Placemark([59.906772, 30.242746], {
        balloonContent: 'Ориентированны на сырье, мукомольно крупяная, Рис Националь краснодарский ООО Компания Ангстрем Трейдинг'
    }, {
        preset: 'islands#icon',
        iconColor: color8
    });

    var SirieMyka5 = new ymaps.Placemark([55.691668, 37.420680], {
        balloonContent: 'Ориентированны на сырье, мукомольно крупяная, Макароны Самокат с томатом и базиликом, ООО Гурмайор'
    }, {
        preset: 'islands#icon',
        iconColor: color8
    });
    

    var SirieMasl1 = new ymaps.Placemark([56.228144, 43.896215], {
        balloonContent: 'Ориентированны на сырье, маслобойная, Масло Самокат Крестьянское сладко-сливочное, несолёное, 72,5%, ООО Молочная Река'
    }, {
        preset: 'islands#icon',
        iconColor: color9
    });

    var SirieMasl2 = new ymaps.Placemark([47.273265, 39.685225], {
        balloonContent: 'Ориентированны на сырье, маслобойная, Масло сладко-сливочное Правильное Традиционное высший сорт, 82,5% ООО Ростов Мит Проджект'
    }, {
        preset: 'islands#icon',
        iconColor: color9
    });

    var SirieMasl3 = new ymaps.Placemark([53.030853, 26.255618], {
        balloonContent: 'Ориентированны на сырье, маслобойная, Масло President кислосливочное, несолёное, 82,5%, СОАО Ляховичский молочный завод'
    }, {
        preset: 'islands#icon',
        iconColor: color9
    });

    var SirieMasl4 = new ymaps.Placemark([59.285834, 39.691902], {
        balloonContent: 'Ориентированны на сырье, маслобойная, Масло сливочное Из Вологды традиционное, 82,5%, АО Учебно-Опытный Молочный Завод ВГМХА им. Н. В. Верещагина'
    }, {
        preset: 'islands#icon',
        iconColor: color9
    });

    var SirieMasl5 = new ymaps.Placemark([59.860372, 30.445942], {
        balloonContent: 'Ориентированны на сырье, маслобойная, Масло сливочное Тысяча Озёр 82,5%, ООО Невские Сыры'
    }, {
        preset: 'islands#icon',
        iconColor: color9
    });

    var SirieSahar1 = new ymaps.Placemark([50.158407, 38.129034], {
        balloonContent: 'Ориентированны на сырье, сахарная, Сахар-песок Русский сахар белый, ООО Русагро-Белгород'
    }, {
        preset: 'islands#icon',
        iconColor: color10
    });

    var SirieSahar2 = new ymaps.Placemark([52.728987, 41.455145], {
        balloonContent: 'Ориентированны на сырье, сахарная, Сахар Чайкофский белый, экстра, ООО Русагро-Тамбов'
    }, {
        preset: 'islands#icon',
        iconColor: color10
    });

    var SirieKonserva1 = new ymaps.Placemark([46.317416, 38.947205], {
        balloonContent: 'Ориентированны на сырье, консервная, Маринованные огурцы Дядя Ваня, по-берлински, ООО Консервное Предприятие Русское Поле'
    }, {
        preset: 'islands#icon',
        iconColor: color11
    });

    var SirieKonserva2 = new ymaps.Placemark([56.174347, 36.991180], {
        balloonContent: 'Ориентированны на сырье, консервная, Cолёные огурцы Самокат, ООО Традиции Вкуса'
    }, {
        preset: 'islands#icon',
        iconColor: color11
    });

    var SirieKonserva3 = new ymaps.Placemark([53.843283, 39.541983], {
        balloonContent: 'Ориентированны на сырье, консервная, Свинина Самокат тушёная Премиум, высший сорт, ООО Скопинский мясоперерабатывающий комбинат'
    }, {
        preset: 'islands#icon',
        iconColor: color11
    });

    var SirieKonserva4 = new ymaps.Placemark([45.430498, 38.702367], {
        balloonContent: 'Ориентированны на сырье, консервная, Горошек зелёный Самокат, ООО Кубанский Консервный Комбинат'
    }, {
        preset: 'islands#icon',
        iconColor: color11
    });

    var SirieKonserva5 = new ymaps.Placemark([50.579956, 36.643394], {
        balloonContent: 'Ориентированны на сырье, консервная, Отборная сахарная кукуруза Самокат, в зёрнах, ООО Белгородский консервный комбинат'
    }, {
        preset: 'islands#icon',
        iconColor: color11
    });

    var SirieFish1 = new ymaps.Placemark([46.883574, 38.752243], {
        balloonContent: 'Ориентированны на сырье, рыбная, Килька Самокат каспийская, неразделанная, обжаренная, в томатном соусе, ООО Рыболовецкое хозяйство Социалистический путь'
    }, {
        preset: 'islands#icon',
        iconColor: color12
    });

    var SirieFish2 = new ymaps.Placemark([56.357895, 41.051378], {
        balloonContent: 'Ориентированны на сырье, рыбная, Форель Самокат Стейковая, замороженная, ООО Кинг-Фрост'
    }, {
        preset: 'islands#icon',
        iconColor: color12
    });

    var SirieFish3 = new ymaps.Placemark([55.781808, 37.856659], {
        balloonContent: 'Ориентированны на сырье, рыбная, Скумбрия Русское море атлантическая, без головы, горячего копчения, АО Русское Море'
    }, {
        preset: 'islands#icon',
        iconColor: color12
    });

    var SirieFish4 = new ymaps.Placemark([54.554142, 36.262037], {
        balloonContent: 'Ориентированны на сырье, рыбная, Сельдь Самокат по-скандинавски, тихоокеанская, филе-кусочки, в маринаде, ООО КРПЗ Морепродукты'
    }, {
        preset: 'islands#icon',
        iconColor: color12
    });


    myMap.geoObjects
    .add(PotrebTea1)
    .add(PotrebTea2)
    .add(PotrebTea3)
    .add(PotrebTea4)
    .add(PotrebTea5)
    .add(PotrebCondit1)
    .add(PotrebCondit2)
    .add(PotrebCondit3)
    .add(PotrebCondit4)
    .add(PotrebCondit5)
    .add(PotrebHleb1)
    .add(PotrebHleb2)
    .add(PotrebHleb3)
    .add(PotrebHleb4)
    .add(PotrebHleb5)
    .add(PotrebMakaron1)
    .add(PotrebMakaron2)
    .add(PotrebMakaron3)
    .add(PotrebMakaron4)
    .add(PotrebMaslo1)
    .add(PotrebMaslo2)
    .add(PotrebMaslo3)
    .add(Meat1)
    .add(Meat2)
    .add(Meat3)
    .add(Meat4)
    .add(Meat5)
    .add(Milk1)
    .add(Milk2)
    .add(Milk3)
    .add(Milk4)
    .add(Milk5)
    .add(SirieMyka1)
    .add(SirieMyka2)
    .add(SirieMyka3)
    .add(SirieMyka4)
    .add(SirieMyka5)
    .add(SirieMasl1)
    .add(SirieMasl2)
    .add(SirieMasl3)
    .add(SirieMasl4)
    .add(SirieMasl5)
    .add(SirieSahar1)
    .add(SirieSahar2)
    .add(SirieKonserva1)
    .add(SirieKonserva2)
    .add(SirieKonserva3)
    .add(SirieKonserva4)
    .add(SirieKonserva5)
    .add(SirieFish1)
    .add(SirieFish2)
    .add(SirieFish3)
    .add(SirieFish4);
}
