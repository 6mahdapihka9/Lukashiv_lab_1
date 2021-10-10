let films =[
    {
        name: "Побег из Шоушенка",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/Movie_poster_the_shawshank_redemption.jpg/339px-Movie_poster_the_shawshank_redemption.jpg",
        year: 	1994,
        producer: ["Фрэнк Дарабонт"],
        genre: ["драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B1%D0%B5%D0%B3_%D0%B8%D0%B7_%D0%A8%D0%BE%D1%83%D1%88%D0%B5%D0%BD%D0%BA%D0%B0"
    },
    {
        name: "Крёстный отец",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c4/Godfather_vhs.jpg/318px-Godfather_vhs.jpg",
        year: 	1972,
        producer: ["Фрэнсис Форд Коппола"],
        genre: ["детектив", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D1%91%D1%81%D1%82%D0%BD%D1%8B%D0%B9_%D0%BE%D1%82%D0%B5%D1%86_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Крёстный отец 2",
        img: "https://upload.wikimedia.org/wikipedia/ru/a/a1/Godfather_2.jpg",
        year: 	1974,
        producer: ["Фрэнсис Форд Коппола"],
        genre: ["детектив", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D1%91%D1%81%D1%82%D0%BD%D1%8B%D0%B9_%D0%BE%D1%82%D0%B5%D1%86_2"
    },
    {
        name: "Тёмный рыцарь",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f4/%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C_%282008%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/328px-%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C_%282008%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",
        year: 	2008,
        producer: ["Кристофер Нолан"],
        genre: ["боевик", "детектив", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C"
    },
    {
        name: "12 разгневанных мужчин",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/313px-12_Angry_Men_%281957_film_poster%29.jpg",
        year: 	1957,
        producer: ["Сидни Люмет"],
        genre: ["драма", "детектив"],
        link: "https://ru.wikipedia.org/wiki/12_%D1%80%D0%B0%D0%B7%D0%B3%D0%BD%D0%B5%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_1957)"
    },
    {
        name: "Список Шиндлера",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/3/38/Schindler%27s_List_movie.jpg/324px-Schindler%27s_List_movie.jpg",
        year: 	1993,
        producer: ["Стивен Спилберг"],
        genre: ["драма", "биография", "исторический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%A8%D0%B8%D0%BD%D0%B4%D0%BB%D0%B5%D1%80%D0%B0"
    },
    {
        name: "Властелин колец: Возвращение короля",
        img: "https://upload.wikimedia.org/wikipedia/ru/5/53/The_Lord_of_the_Rings._The_Return_of_the_King_%E2%80%94_movie.jpg",
        year: 	2003,
        producer: ["Питер Джексон"],
        genre: ["фэнтези", "приключение", "боевик"],
        link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BB%D0%B0%D1%81%D1%82%D0%B5%D0%BB%D0%B8%D0%BD_%D0%BA%D0%BE%D0%BB%D0%B5%D1%86:_%D0%92%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BA%D0%BE%D1%80%D0%BE%D0%BB%D1%8F"
    },
    {
        name: "Криминальное чтиво",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/Pulp_Fiction.jpg/337px-Pulp_Fiction.jpg",
        year: 	1994,
        producer: ["Квентин Тарантино"],
        genre: ["чёрная комедия", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%BC%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D1%87%D1%82%D0%B8%D0%B2%D0%BE"
    },
    {
        name: "Хороший, плохой, злой",
        img: "https://upload.wikimedia.org/wikipedia/ru/f/fd/Goodbadugly.JPG",
        year: 	1966,
        producer: ["Серджо Леоне"],
        genre: ["приключение", "вестерн"],
        link: "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%B9,_%D0%BF%D0%BB%D0%BE%D1%85%D0%BE%D0%B9,_%D0%B7%D0%BB%D0%BE%D0%B9"
    },
    {
        name: "Властелин колец: Братство Кольца",
        img: "https://upload.wikimedia.org/wikipedia/ru/0/08/The_Lord_of_the_Rings._The_Fellowship_of_the_Ring_%E2%80%94_movie.jpg",
        year: 	2001,
        producer: ["Питер Джексон"],
        genre: ["фэнтези", "приключение", "боевик"],
        link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BB%D0%B0%D1%81%D1%82%D0%B5%D0%BB%D0%B8%D0%BD_%D0%BA%D0%BE%D0%BB%D0%B5%D1%86:_%D0%91%D1%80%D0%B0%D1%82%D1%81%D1%82%D0%B2%D0%BE_%D0%9A%D0%BE%D0%BB%D1%8C%D1%86%D0%B0"
    },
    {
        name: "Бойцовский клуб",
        img: "https://upload.wikimedia.org/wikipedia/ru/8/8a/Fight_club.jpg",
        year: 	1999,
        producer: ["Дэвид Финчер"],
        genre: ["драма", "триллер", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B9%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BB%D1%83%D0%B1_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Форрест Гамп",
        img: "https://upload.wikimedia.org/wikipedia/ru/d/de/%D0%A4%D0%BE%D1%80%D1%80%D0%B5%D1%81%D1%82_%D0%93%D0%B0%D0%BC%D0%BF.jpg",
        year: 	1994,
        producer: ["Роберт Земекис"],
        genre: ["драма", "мелодрама"],
        link: "https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%80%D1%80%D0%B5%D1%81%D1%82_%D0%93%D0%B0%D0%BC%D0%BF"
    },
    {
        name: "Начало",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/bc/Poster_Inception_film_2010.jpg/339px-Poster_Inception_film_2010.jpg",
        year: 	2010,
        producer: ["Кристофер Нолан"],
        genre: ["боевик", "мистический фильм", "научная фантастика"],
        link: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2010)"
    },
    {
        name: "Властелин колец: Две крепости",
        img: "https://upload.wikimedia.org/wikipedia/ru/f/f0/The_Lord_of_the_Rings._The_Two_Towers_%E2%80%94_movie.jpg",
        year: 	2002,
        producer: ["Питер Джексон"],
        genre: ["фэнтези", "приключение", "боевик"],
        link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BB%D0%B0%D1%81%D1%82%D0%B5%D0%BB%D0%B8%D0%BD_%D0%BA%D0%BE%D0%BB%D0%B5%D1%86:_%D0%94%D0%B2%D0%B5_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D0%B8"
    },
    {
        name: "Звёздные войны. Эпизод V: Империя наносит ответный удар",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/e0/Empire20strikes20back_old.jpg/309px-Empire20strikes20back_old.jpg",
        year: 	1980,
        producer: ["Ирвин Кершнер"],
        genre: ["научная фантастика", "приключение", "боевик"],
        link: "https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B._%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4_V:_%D0%98%D0%BC%D0%BF%D0%B5%D1%80%D0%B8%D1%8F_%D0%BD%D0%B0%D0%BD%D0%BE%D1%81%D0%B8%D1%82_%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B9_%D1%83%D0%B4%D0%B0%D1%80"
    },
    {
        name: "Матрица",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/9d/Matrix-DVD.jpg/346px-Matrix-DVD.jpg",
        year: 1999,
        producer: ["Энди и Ларри Вачовски"],
        genre: ["научная фантастика", "боевик", "приключение"],
        link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Славные парни",
        img: "https://upload.wikimedia.org/wikipedia/ru/9/99/Goodfellas_Cover.jpg",
        year: 1990,
        producer: ["Мартин Скорсезе"],
        genre: ["детектив", "триллер", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B5_%D0%BF%D0%B0%D1%80%D0%BD%D0%B8"
    },
    {
        name: "Пролетая над гнездом кукушки",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/26/One_Flew_Over_the_Cuckoo%27s_Nest_poster.jpg/319px-One_Flew_Over_the_Cuckoo%27s_Nest_poster.jpg",
        year: 1975,
        producer: ["Милош Форман"],
        genre: ["драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%8F_%D0%BD%D0%B0%D0%B4_%D0%B3%D0%BD%D0%B5%D0%B7%D0%B4%D0%BE%D0%BC_%D0%BA%D1%83%D0%BA%D1%83%D1%88%D0%BA%D0%B8_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Семь самураев",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Sevensamurai-movieposter1954.jpg/343px-Sevensamurai-movieposter1954.jpg",
        year: 1954,
        producer: ["Акира Куросава"],
        genre: ["приключение", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BC%D1%8C_%D1%81%D0%B0%D0%BC%D1%83%D1%80%D0%B0%D0%B5%D0%B2"
    },
    {
        name: "Семь",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/8/83/Se7en_%28poster%29.jpg/343px-Se7en_%28poster%29.jpg",
        year: 1995,
        producer: ["Дэвид Финчер"],
        genre: ["детектив", "драма", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BC%D1%8C_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Жизнь прекрасна",
        img: "https://upload.wikimedia.org/wikipedia/ru/1/1d/%D0%96%D0%B8%D0%B7%D0%BD%D1%8C_%D0%BF%D1%80%D0%B5%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg",
        year: 	1997,
        producer: ["Роберто Бениньи"],
        genre: ["драма", "мелодрама", "военный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D0%B7%D0%BD%D1%8C_%D0%BF%D1%80%D0%B5%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_1997)"
    },
    {
        name: "Город Бога",
        img: "https://upload.wikimedia.org/wikipedia/ru/6/6f/%D0%93%D0%BE%D1%80%D0%BE%D0%B4_%D0%91%D0%BE%D0%B3%D0%B0_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_1.jpg",
        year: 	2002,
        producer: ["Фернанду Мейреллиш"],
        genre: ["детектив", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BE%D0%B4_%D0%91%D0%BE%D0%B3%D0%B0"
    },
    {
        name: "Молчание ягнят",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/95/The_Silence_Of_The_Lambs.jpg/324px-The_Silence_Of_The_Lambs.jpg",
        year: 	1991,
        producer: ["Джонатан Демми"],
        genre: ["детектив", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D0%B5_%D1%8F%D0%B3%D0%BD%D1%8F%D1%82_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Эта прекрасная жизнь",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/af/Poster_for_IAWL.jpg/330px-Poster_for_IAWL.jpg",
        year: 	1946,
        producer: ["Фрэнк Капра"],
        genre: ["драма", "сказка", "семейный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%AD%D1%82%D0%B0_%D0%BF%D1%80%D0%B5%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C"
    },
    {
        name: "Звёздные войны. Эпизод IV: Новая надежда",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/8/87/StarWarsMoviePoster1977.jpg/318px-StarWarsMoviePoster1977.jpg",
        year: 	1977,
        producer: ["Джордж Лукас"],
        genre: ["научная фантастика", "приключение", "боевик"],
        link: "https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B._%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4_IV:_%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0"
    },
    {
        name: "Спасти рядового Райана",
        img: "https://upload.wikimedia.org/wikipedia/ru/1/1c/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%A1%D0%BF%D0%B0%D1%81%D1%82%D0%B8_%D1%80%D1%8F%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE_%D0%A0%D0%B0%D0%B9%D0%B0%D0%BD%D0%B0.jpg",
        year: 	1998,
        producer: ["Стивен Спилберг"],
        genre: ["боевик", "драма", "исторический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B0%D1%81%D1%82%D0%B8_%D1%80%D1%8F%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE_%D0%A0%D0%B0%D0%B9%D0%B0%D0%BD%D0%B0"
    },
    {
        name: "Зелёная миля",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/ce/Green_mile.jpg/337px-Green_mile.jpg",
        year: 	1999,
        producer: ["Фрэнк Дарабонт"],
        genre: ["детектив", "драма", "фэнтези"],
        link: "https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D0%BB%D1%91%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B8%D0%BB%D1%8F_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Унесённые призраками",
        img: "https://upload.wikimedia.org/wikipedia/ru/6/61/Spirited_away.jpg",
        year: 	2001,
        producer: ["Хаяо Миядзаки"],
        genre: ["аниме", "приключение", "семейный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%A3%D0%BD%D0%B5%D1%81%D1%91%D0%BD%D0%BD%D1%8B%D0%B5_%D0%BF%D1%80%D0%B8%D0%B7%D1%80%D0%B0%D0%BA%D0%B0%D0%BC%D0%B8"
    },
    {
        name: "Интерстеллар",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c3/Interstellar_2014.jpg/345px-Interstellar_2014.jpg",
        year: 	2014,
        producer: ["Кристофер Нолан"],
        genre: ["приключение", "научная фантастика"],
        link: "https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D1%80"
    },
    {
        name: "Паразиты",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC_%D0%9F%D0%B0%D1%80%D0%B0%D0%B7%D0%B8%D1%82%D1%8B_%28Gisaengchung%29.png/336px-%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC_%D0%9F%D0%B0%D1%80%D0%B0%D0%B7%D0%B8%D1%82%D1%8B_%28Gisaengchung%29.png",
        year: 	2019,
        producer: ["Пон Чжун Хо"],
        genre: ["комедия", "драма", "триллер"],
        link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D1%80%D0%B0%D0%B7%D0%B8%D1%82%D1%8B_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Леон",
        img: "https://upload.wikimedia.org/wikipedia/ru/e/e1/L%C3%A9on_poster.JPG",
        year: 	1994,
        producer: ["Люк Бессон"],
        genre: ["детектив", "триллер", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BE%D0%BD_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Харакири",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/90/Seppuku_%28Harakiri%29_1962.jpg/348px-Seppuku_%28Harakiri%29_1962.jpg",
        year: 	1962,
        producer: ["Масаки Кобаяси"],
        genre: ["боевик", "драма", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D0%B0%D0%BA%D0%B8%D1%80%D0%B8_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_1962)"
    },
    {
        name: "Подозрительные лица",
        img: "https://upload.wikimedia.org/wikipedia/ru/d/db/The_Usual_Suspects_DVD.jpg",
        year: 	1995,
        producer: ["Брайан Сингер"],
        genre: ["детектив", "триллер", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D0%BE%D0%B7%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%BB%D0%B8%D1%86%D0%B0"
    },
    {
        name: "Король Лев",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/62/Lion_king_ver1.jpg/336px-Lion_king_ver1.jpg",
        year: 	1994,
        producer: ["Роджер Аллерс", "Роб Минкофф"],
        genre: ["мультфильм", "приключение"],
        link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D1%8C_%D0%9B%D0%B5%D0%B2"
    },
    {
        name: "Пианист",
        img: "https://upload.wikimedia.org/wikipedia/ru/a/a6/The_Pianist_movie.jpg",
        year: 	2002,
        producer: ["Роман Полански"],
        genre: ["биография", "драма", "военный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B8%D0%B0%D0%BD%D0%B8%D1%81%D1%82_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Терминатор 2: Судный день",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/8/85/Terminator2poster.jpg/321px-Terminator2poster.jpg",
        year: 	1991,
        producer: ["Джеймс Кэмерон"],
        genre: ["боевик", "научная фантастика", "триллер"],
        link: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%B0%D1%82%D0%BE%D1%80_2:_%D0%A1%D1%83%D0%B4%D0%BD%D1%8B%D0%B9_%D0%B4%D0%B5%D0%BD%D1%8C"
    },
    {
        name: "Назад в будущее",
        img: "https://upload.wikimedia.org/wikipedia/ru/9/90/BTTF_DVD_rus.jpg",
        year: 	1985,
        producer: ["Роберт Земекис"],
        genre: ["научная фантастика", "приключение", "семейный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4_%D0%B2_%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%B5_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Американская история Икс",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/04/American-History-X.jpg/343px-American-History-X.jpg",
        year: 	1998,
        producer: ["Тони Кэй"],
        genre: ["драма", "детектив"],
        link: "https://ru.wikipedia.org/wiki/%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F_%D0%98%D0%BA%D1%81"
    },
    {
        name: "Новые времена",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Modern_Times_poster.jpg/315px-Modern_Times_poster.jpg",
        year: 	1936,
        producer: ["Чарли Чаплин"],
        genre: ["комедия", "мелодрама", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_1936)"
    },
    {
        name: "Гладиатор",
        img: "https://upload.wikimedia.org/wikipedia/ru/f/fe/Gladiatorteaser.jpg",
        year: 	2000,
        producer: ["Ридли Скотт"],
        genre: ["боевик", "приключение", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%93%D0%BB%D0%B0%D0%B4%D0%B8%D0%B0%D1%82%D0%BE%D1%80_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2000)"
    },
    {
        name: "Психо",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/324px-Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg",
        year: 	1960,
        producer: ["Альфред Хичкок"],
        genre: ["фильм ужасов", "триллер", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9F%D1%81%D0%B8%D1%85%D0%BE"
    },
    {
        name: "Отступники",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/ed/%D0%9E%D1%82%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%B8%D0%BA%D0%B8_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg/343px-%D0%9E%D1%82%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%B8%D0%BA%D0%B8_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg",
        year: 	2006,
        producer: ["Мартин Скорсезе"],
        genre: ["детектив", "драма", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9E%D1%82%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%B8%D0%BA%D0%B8"
    },
    {
        name: "Огни большого города",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/City_Lights_%281931_theatrical_poster_-_retouched%29.jpg/319px-City_Lights_%281931_theatrical_poster_-_retouched%29.jpg",
        year: 	1931,
        producer: ["Чарли Чаплин"],
        genre: ["комедия", "драма", "мелодрама"],
        link: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B3%D0%BD%D0%B8_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B3%D0%BE_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0"
    },
    {
        name: "1+1",
        img: "https://upload.wikimedia.org/wikipedia/ru/b/b9/Intouchables.jpg",
        year: 	2011,
        producer: ["Оливье Накаш", "Эрик Толедано"],
        genre: ["трагикомедия"],
        link: "https://ru.wikipedia.org/wiki/1%2B1_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Одержимость",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/01/Whiplash_poster.jpg/336px-Whiplash_poster.jpg",
        year: 	2014,
        producer: ["Дамьен Шазель"],
        genre: ["драма", "музыкальный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2014)"
    },
    {
        name: "Могила светлячков",
        img: "https://upload.wikimedia.org/wikipedia/ru/6/68/Grave_of_the_Fireflies_DVDcover.jpg",
        year: 	1988,
        producer: ["Исао Такахата"],
        genre: ["мультфильм", "драма", "военный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8F%D1%87%D0%BA%D0%BE%D0%B2"
    },
    {
        name: "Престиж",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a0/Prestige10.jpg/328px-Prestige10.jpg",
        year: 	2006,
        producer: ["Кристофер Нолан"],
        genre: ["фэнтези", "драма", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%B6_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Однажды на Диком Западе",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/1/18/Once-upon-a-time-in-the-west-charles-bronson-henry-fonda.jpg/318px-Once-upon-a-time-in-the-west-charles-bronson-henry-fonda.jpg",
        year: 	1968,
        producer: ["Серджо Леоне"],
        genre: ["вестерн"],
        link: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%B0%D0%B6%D0%B4%D1%8B_%D0%BD%D0%B0_%D0%94%D0%B8%D0%BA%D0%BE%D0%BC_%D0%97%D0%B0%D0%BF%D0%B0%D0%B4%D0%B5"
    },
    {
        name: "Касабланка",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CasablancaPoster-Gold.jpg/324px-CasablancaPoster-Gold.jpg",
        year: 	1942,
        producer: ["Майкл Кёртиц"],
        genre: ["мелодрама", "военный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%81%D0%B0%D0%B1%D0%BB%D0%B0%D0%BD%D0%BA%D0%B0_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Новый кинотеатр «Парадизо»",
        img: "https://upload.wikimedia.org/wikipedia/ru/c/c2/Nuovo-Paradiso.jpg",
        year: 	1988,
        producer: ["Джузеппе Торнаторе"],
        genre: ["комедия", "драма", "мелодрама"],
        link: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80_%C2%AB%D0%9F%D0%B0%D1%80%D0%B0%D0%B4%D0%B8%D0%B7%D0%BE%C2%BB"
    },
    {
        name: "Окно во двор",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/d6/Rearwindowposter.jpg/330px-Rearwindowposter.jpg",
        year: 	1954,
        producer: ["Альфред Хичкок"],
        genre: ["детектив", "мистический фильм", "мелодрама"],
        link: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BA%D0%BD%D0%BE_%D0%B2%D0%BE_%D0%B4%D0%B2%D0%BE%D1%80"
    },
    {
        name: "Чужой",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c3/Alien_movie_poster.jpg/372px-Alien_movie_poster.jpg",
        year: 	1979,
        producer: ["Ридли Скотт"],
        genre: ["фильм ужасов", "научная фантастика"],
        link: "https://ru.wikipedia.org/wiki/%D0%A7%D1%83%D0%B6%D0%BE%D0%B9_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Апокалипсис сегодня",
        img: "https://upload.wikimedia.org/wikipedia/ru/2/26/%D0%90%D0%BF%D0%BE%D0%BA%D0%B0%D0%BB%D0%B8%D0%BF%D1%81%D0%B8%D1%81_%D1%81%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F.jpg",
        year: 	1979,
        producer: ["Фрэнсис Форд Коппола"],
        genre: ["драма", "военный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%90%D0%BF%D0%BE%D0%BA%D0%B0%D0%BB%D0%B8%D0%BF%D1%81%D0%B8%D1%81_%D1%81%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F"
    },
    {
        name: "Помни",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c7/Memento_poster.jpg/327px-Memento_poster.jpg",
        year: 	2000,
        producer: ["Кристофер Нолан"],
        genre: ["детектив", "драма", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BC%D0%BD%D0%B8"
    },
    {
        name: "Великий диктатор",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/The_Great_Dictator_%281940%29_poster.jpg/319px-The_Great_Dictator_%281940%29_poster.jpg",
        year: 	1940,
        producer: ["Чарли Чаплин"],
        genre: ["комедия", "драма", "военный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9_%D0%B4%D0%B8%D0%BA%D1%82%D0%B0%D1%82%D0%BE%D1%80"
    },
    {
        name: "Индиана Джонс: В поисках утраченного ковчега",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/79/Indiana-jones-raiders-of-lost-ark-poster.jpg/315px-Indiana-jones-raiders-of-lost-ark-poster.jpg",
        year: 	1981,
        producer: ["Стивен Спилберг"],
        genre: ["приключение", "боевик"],
        link: "https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B4%D0%B8%D0%B0%D0%BD%D0%B0_%D0%94%D0%B6%D0%BE%D0%BD%D1%81:_%D0%92_%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0%D1%85_%D1%83%D1%82%D1%80%D0%B0%D1%87%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BA%D0%BE%D0%B2%D1%87%D0%B5%D0%B3%D0%B0"
    },
    {
        name: "Джанго освобождённый",
        img: "https://upload.wikimedia.org/wikipedia/ru/b/ba/Django_Unchained.jpg",
        year: 	2012,
        producer: ["Квентин Тарантино"],
        genre: ["приключение", "вестерн"],
        link: "https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%B0%D0%BD%D0%B3%D0%BE_%D0%BE%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B6%D0%B4%D1%91%D0%BD%D0%BD%D1%8B%D0%B9"
    },
    {
        name: "Жизнь других",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5d/The_Lives_of_Others_%28poster%29.jpg/349px-The_Lives_of_Others_%28poster%29.jpg",
        year: 	2006,
        producer: ["Флориан Хенкель фон Доннерсмарк"],
        genre: ["драма", "триллер"],
        link: "https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D0%B7%D0%BD%D1%8C_%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D1%85"
    },
    {
        name: "Гамильтон",
        img: "https://kino-teatr.ua/public/main/films/2020-06/x4_poster_5ef18aef1d538.jpg",
        year: 	2020,
        producer: ["Томас Каил"],
        genre: ["биография", "драма", "исторический фильм"],
        link: "https://ru.wikipedia.org/w/index.php?title=%D0%93%D0%B0%D0%BC%D0%B8%D0%BB%D1%8C%D1%82%D0%BE%D0%BD_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)&action=edit&redlink=1"
    },
    {
        name: "Тропы славы",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Paths_of_Glory_%281957_poster%29.jpg/316px-Paths_of_Glory_%281957_poster%29.jpg",
        year: 	1957,
        producer: ["Стэнли Кубрик"],
        genre: ["драма", "детектив", "военный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D0%BE%D0%BF%D1%8B_%D1%81%D0%BB%D0%B0%D0%B2%D1%8B"
    },
    {
        name: "Джокер",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/6f/%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%A2%D0%BE%D0%B4%D0%B4%D0%B0_%D0%A4%D0%B8%D0%BB%D0%BB%D0%B8%D0%BF%D1%81%D0%B0%29.jpg/324px-%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%A2%D0%BE%D0%B4%D0%B4%D0%B0_%D0%A4%D0%B8%D0%BB%D0%BB%D0%B8%D0%BF%D1%81%D0%B0%29.jpg",
        year: 	2019,
        producer: ["Тодд Филлипс"],
        genre: ["детектив", "драма", "триллер"],
        link: "https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2019)"
    },
    {
        name: "ВАЛЛ-И",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c4/WALL-E_poster.png/319px-WALL-E_poster.png",
        year: 	2008,
        producer: ["Эндрю Стэнтон"],
        genre: ["мультфильм", "приключение", "семейный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%92%D0%90%D0%9B%D0%9B-%D0%98"
    },
    {
        name: "Сияние",
        img: "https://upload.wikimedia.org/wikipedia/ru/e/ef/The_Shining.jpg",
        year: 	1980,
        producer: ["Стэнли Кубрик"],
        genre: ["фильм ужасов", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Мстители: Война бесконечности",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Avengers_Infinity_War_poster.jpg/325px-Avengers_Infinity_War_poster.jpg",
        year: 	2018,
        producer: ["Братья Руссо"],
        genre: ["боевик", "приключение", "научная фантастика"],
        link: "https://ru.wikipedia.org/wiki/%D0%9C%D1%81%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D0%B8:_%D0%92%D0%BE%D0%B9%D0%BD%D0%B0_%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D1%81%D1%82%D0%B8"
    },
    {
        name: "Бульвар Сансет",
        img: "https://upload.wikimedia.org/wikipedia/ru/f/fb/Sunset_Blvd_poster.jpg",
        year: 	1950,
        producer: ["Билли Уайлдер"],
        genre: ["драма", "нуар"],
        link: "https://ru.wikipedia.org/wiki/%D0%91%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80_%D0%A1%D0%B0%D0%BD%D1%81%D0%B5%D1%82_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Свидетель обвинения",
        img: "https://upload.wikimedia.org/wikipedia/ru/c/c9/Witness_for_the_Prosecution.jpg",
        year: 	1957,
        producer: ["Билли Уайлдер"],
        genre: ["детектив", "драма", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D1%8C_%D0%BE%D0%B1%D0%B2%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F"
    },
    {
        name: "Олдбой",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8c/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9E%D0%BB%D0%B4%D0%B1%D0%BE%D0%B9%C2%BB_%282003%29.jpg/325px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9E%D0%BB%D0%B4%D0%B1%D0%BE%D0%B9%C2%BB_%282003%29.jpg",
        year: 	2003,
        producer: ["Пак Чхан Ук"],
        genre: ["драма", "мистический фильм", "триллер"],
        link: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BB%D0%B4%D0%B1%D0%BE%D0%B9_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2003)"
    },
    {
        name: "Человек-паук: Через вселенные",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/2c/Spider-Man_-_Into_the_Spider-Verse.jpg/325px-Spider-Man_-_Into_the_Spider-Verse.jpg",
        year: 	2018,
        producer: ["Боб Персичетти"],
        genre: ["мультфильм", "боевик", "приключение"],
        link: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA:_%D0%A7%D0%B5%D1%80%D0%B5%D0%B7_%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5"
    },
    {
        name: "Принцесса Мононоке",
        img: "https://upload.wikimedia.org/wikipedia/ru/3/38/Mononoke_Hime_DVD_Cover.jpg",
        year: 	1997,
        producer: ["Хаяо Миядзаки"],
        genre: ["мультфильм", "приключение", "фэнтези"],
        link: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B0_%D0%9C%D0%BE%D0%BD%D0%BE%D0%BD%D0%BE%D0%BA%D0%B5"
    },
    {
        name: "Доктор Стрейнджлав, или Как я перестал бояться и полюбил бомбу",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a4/DrstrangeloveCover.jpg/366px-DrstrangeloveCover.jpg",
        year: 	1964,
        producer: ["Стэнли Кубрик"],
        genre: ["комедия", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%A1%D1%82%D1%80%D0%B5%D0%B9%D0%BD%D0%B4%D0%B6%D0%BB%D0%B0%D0%B2,_%D0%B8%D0%BB%D0%B8_%D0%9A%D0%B0%D0%BA_%D1%8F_%D0%BF%D0%B5%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%BB_%D0%B1%D0%BE%D1%8F%D1%82%D1%8C%D1%81%D1%8F_%D0%B8_%D0%BF%D0%BE%D0%BB%D1%8E%D0%B1%D0%B8%D0%BB_%D0%B1%D0%BE%D0%BC%D0%B1%D1%83"
    },
    {
        name: "Тёмный рыцарь: Возрождение легенды",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/8/83/Dark_knight_rises_poster.jpg/319px-Dark_knight_rises_poster.jpg",
        year: 	2012,
        producer: ["Кристофер Нолан"],
        genre: ["боевик", "триллер", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C:_%D0%92%D0%BE%D0%B7%D1%80%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BB%D0%B5%D0%B3%D0%B5%D0%BD%D0%B4%D1%8B"
    },
    {
        name: "Однажды в Америке",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/3/38/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9E%D0%B4%D0%BD%D0%B0%D0%B6%D0%B4%D1%8B_%D0%B2_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B5%C2%BB_%28%D0%A1%D0%A8%D0%90%2C_1984%29.jpg/319px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9E%D0%B4%D0%BD%D0%B0%D0%B6%D0%B4%D1%8B_%D0%B2_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B5%C2%BB_%28%D0%A1%D0%A8%D0%90%2C_1984%29.jpg",
        year: 	1984,
        producer: ["Серджо Леоне"],
        genre: ["детектив", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%B0%D0%B6%D0%B4%D1%8B_%D0%B2_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B5"
    },
    {
        name: "Твоё имя",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/2c/Kimi_no_Na_wa.jpg/337px-Kimi_no_Na_wa.jpg",
        year: 2016,
        producer: ["Макото Синкай"],
        genre: ["мультфильм", "драма", "фэнтези"],
        link: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B2%D0%BE%D1%91_%D0%B8%D0%BC%D1%8F"
    },
    {
        name: "Чужие",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/fb/Aliens_poster.jpg/313px-Aliens_poster.jpg",
        year: 	1986,
        producer: ["Джеймс Кэмерон"],
        genre: ["фильм ужасов", "научная фантастика", "боевик"],
        link: "https://ru.wikipedia.org/wiki/%D0%A7%D1%83%D0%B6%D0%B8%D0%B5_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_1986)"
    },
    {
        name: "Тайна Коко",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/d7/Coco_%282017_film%29_logo.jpg/328px-Coco_%282017_film%29_logo.jpg",
        year: 	2017,
        producer: ["Ли Анкрич", "Эдриан Молина"],
        genre: ["мультфильм", "приключение", "семейный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%B9%D0%BD%D0%B0_%D0%9A%D0%BE%D0%BA%D0%BE"
    },
    {
        name: "Мстители: Финал",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a4/The_Avengers_Endgame_Poster.jpg/324px-The_Avengers_Endgame_Poster.jpg",
        year: 	2019,
        producer: ["Братья Руссо"],
        genre: ["боевик", "приключение", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%9C%D1%81%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D0%B8:_%D0%A4%D0%B8%D0%BD%D0%B0%D0%BB"
    },
    {
        name: "Капернаум",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f2/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%9A%D0%B0%D0%BF%D0%B5%D1%80%D0%BD%D0%B0%D1%83%D0%BC.jpg/333px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%9A%D0%B0%D0%BF%D0%B5%D1%80%D0%BD%D0%B0%D1%83%D0%BC.jpg",
        year: 	2018,
        producer: ["Надин Лабаки"],
        genre: ["драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BF%D0%B5%D1%80%D0%BD%D0%B0%D1%83%D0%BC_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Красота по-американски",
        img: "https://upload.wikimedia.org/wikipedia/ru/b/b6/American_Beauty_poster.jpg",
        year: 	1999,
        producer: ["Сэм Мендес"],
        genre: ["драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BE%D1%82%D0%B0_%D0%BF%D0%BE-%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8"
    },
    {
        name: "Храброе сердце",
        img: "https://upload.wikimedia.org/wikipedia/ru/5/55/Braveheart_imp.jpg",
        year: 	1995,
        producer: ["Мел Гибсон"],
        genre: ["боевик", "биография", "драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%B0%D0%B1%D1%80%D0%BE%D0%B5_%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5"
    },
    {
        name: "Рай и ад",
        img: "https://upload.wikimedia.org/wikipedia/ru/6/6a/HIGH_AND_LOW_JP_.jpg",
        year: 	1963,
        producer: ["Акира Куросава"],
        genre: ["детектив", "драма", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B9_%D0%B8_%D0%B0%D0%B4"
    },
    {
        name: "Подводная лодка",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a3/Das_boot_ver1.jpg/339px-Das_boot_ver1.jpg",
        year: 	1981,
        producer: ["Вольфганг Петерсен"],
        genre: ["боевик", "драма", "исторический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F_%D0%BB%D0%BE%D0%B4%D0%BA%D0%B0_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "История игрушек",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a6/Toy_Story_1995_Poster.jpg/321px-Toy_Story_1995_Poster.jpg",
        year: 	1995,
        producer: ["Джон Лассетер"],
        genre: ["мультфильм", "приключение", "комедия"],
        link: "https://ru.wikipedia.org/wiki/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F_%D0%B8%D0%B3%D1%80%D1%83%D1%88%D0%B5%D0%BA"
    },
    {
        name: "3 идиота",
        img: "https://upload.wikimedia.org/wikipedia/ru/d/dc/Threeidiots2.jpg",
        year: 	2009,
        producer: ["Раджкумар Хирани"],
        genre: ["комедия", "драма"],
        link: "https://ru.wikipedia.org/wiki/3_%D0%B8%D0%B4%D0%B8%D0%BE%D1%82%D0%B0"
    },
    {
        name: "Амадей",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/dd/Amadeus_ver1.jpg/304px-Amadeus_ver1.jpg",
        year: 	1984,
        producer: ["Милош Форман"],
        genre: ["биография", "драма", "музыкальный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%90%D0%BC%D0%B0%D0%B4%D0%B5%D0%B9_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "Бесславные ублюдки",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c3/Inglourious_Basterds_poster.jpg/345px-Inglourious_Basterds_poster.jpg",
        year: 	2009,
        producer: ["Квентин Тарантино"],
        genre: ["военный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%81%D1%81%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B5_%D1%83%D0%B1%D0%BB%D1%8E%D0%B4%D0%BA%D0%B8"
    },
    {
        name: "Умница Уилл Хантинг",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/6c/Good_will_hunting_poster.JPG/327px-Good_will_hunting_poster.JPG",
        year: 	1997,
        producer: ["Гас Ван Сент"],
        genre: ["драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%A3%D0%BC%D0%BD%D0%B8%D1%86%D0%B0_%D0%A3%D0%B8%D0%BB%D0%BB_%D0%A5%D0%B0%D0%BD%D1%82%D0%B8%D0%BD%D0%B3"
    },
    {
        name: "Звёздные войны. Эпизод VI: Возвращение джедая",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/328px-ReturnOfTheJediPoster1983.jpg",
        year: 	1983,
        producer: ["Ричард Маркуанд"],
        genre: ["научная фантастика", "приключение", "боевик"],
        link: "https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B._%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4_VI:_%D0%92%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B4%D0%B6%D0%B5%D0%B4%D0%B0%D1%8F"
    },
    {
        name: "Звёздочки на земле",
        img: "https://upload.wikimedia.org/wikipedia/ru/b/bd/TaareZameenPar.jpg",
        year: 	2007,
        producer: ["Аамир Хан"],
        genre: ["драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BE%D1%87%D0%BA%D0%B8_%D0%BD%D0%B0_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5"
    },
    {
        name: "Бешеные псы",
        img: "https://upload.wikimedia.org/wikipedia/ru/8/8a/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC_%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9.jpg",
        year: 	1992,
        producer: ["Квентин Тарантино"],
        genre: ["детектив", "триллер", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%88%D0%B5%D0%BD%D1%8B%D0%B5_%D0%BF%D1%81%D1%8B"
    },
    {
        name: "Космическая одиссея 2001 года",
        img: "https://upload.wikimedia.org/wikipedia/ru/3/38/2001_A_Space_Odyssey.jpg",
        year:  	1968,
        producer: ["Стэнли Кубрик"],
        genre: ["научная фантастика", "приключение", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B4%D0%B8%D1%81%D1%81%D0%B5%D1%8F_2001_%D0%B3%D0%BE%D0%B4%D0%B0"
    },
    {
        name: "Реквием по мечте",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/92/Requiem_for_a_dream.jpg/331px-Requiem_for_a_dream.jpg",
        year: 	2000,
        producer: ["Даррен Аронофски"],
        genre: ["драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%BA%D0%B2%D0%B8%D0%B5%D0%BC_%D0%BF%D0%BE_%D0%BC%D0%B5%D1%87%D1%82%D0%B5"
    },
    {
        name: "Охота",
        img: "https://upload.wikimedia.org/wikipedia/ru/7/79/Jagten.jpg",
        year: 	2012,
        producer: ["Томас Винтерберг"],
        genre: ["драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%9E%D1%85%D0%BE%D1%82%D0%B0_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2012)"
    },
    {
        name: "Головокружение",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Vertigomovie.jpg/309px-Vertigomovie.jpg",
        year: 	1958,
        producer: ["Альфред Хичкок"],
        genre: ["детектив", "мелодрама", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
    },
    {
        name: "М",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/1/1a/M_1931_filmplakat.jpg/321px-M_1931_filmplakat.jpg",
        year: 	1931,
        producer: ["Фриц Ланг"],
        genre: ["детектив", "триллер"],
        link: "https://ru.wikipedia.org/wiki/%D0%9C_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_1931)"
    },
    {
        name: "Вечное сияние чистого разума",
        img: "https://upload.wikimedia.org/wikipedia/ru/a/af/Eternal_Sunshine_of_the_Spotless_Mind.jpg",
        year: 	2004,
        producer: ["Мишель Гондри"],
        genre: ["драма", "мелодрама", "научная фантастика"],
        link: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%87%D0%BD%D0%BE%D0%B5_%D1%81%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5_%D1%87%D0%B8%D1%81%D1%82%D0%BE%D0%B3%D0%BE_%D1%80%D0%B0%D0%B7%D1%83%D0%BC%D0%B0"
    },
    {
        name: "Гражданин Кейн",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Citizen_Kane_poster%2C_1941_%28Style_A%29.jpg/318px-Citizen_Kane_poster%2C_1941_%28Style_A%29.jpg",
        year: 	1941,
        producer: ["Орсон Уэллс"],
        genre: ["драма", "мистический фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D0%B8%D0%BD_%D0%9A%D0%B5%D0%B9%D0%BD"
    },
    {
        name: "Дангал",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/af/Dangal-poster.jpg/360px-Dangal-poster.jpg",
        year: 	2016,
        producer: ["Нитеш Тивари"],
        genre: ["боевик","биография","драма"],
        link: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BD%D0%B3%D0%B0%D0%BB"
    },
    {
        name: "Лига справедливости Зака Снайдера",
        img: "https://upload.wikimedia.org/wikipedia/ru/3/38/%D0%9B%D0%B8%D0%B3%D0%B0_%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%B5%D0%B4%D0%BB%D0%B8%D0%B2%D0%BE%D1%81%D1%82%D0%B8_%D0%97%D0%B0%D0%BA%D0%B0_%D0%A1%D0%BD%D0%B0%D0%B9%D0%B4%D0%B5%D1%80%D0%B0.png",
        year: 	2021,
        producer: ["Зак Снайдер"],
        genre: ["супергеройский","боевик", "фантастика"],
        link: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%B3%D0%B0_%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%B5%D0%B4%D0%BB%D0%B8%D0%B2%D0%BE%D1%81%D1%82%D0%B8_%D0%97%D0%B0%D0%BA%D0%B0_%D0%A1%D0%BD%D0%B0%D0%B9%D0%B4%D0%B5%D1%80%D0%B0"
    },
    {
        name: "Поющие под дождём",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Singin%27_in_the_Rain_%281952_poster%29.jpg/316px-Singin%27_in_the_Rain_%281952_poster%29.jpg",
        year: 	1952,
        producer: ["Стэнли Донен", "Джин Келли"],
        genre: ["комедия", "мюзикл"],
        link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%8E%D1%89%D0%B8%D0%B5_%D0%BF%D0%BE%D0%B4_%D0%B4%D0%BE%D0%B6%D0%B4%D1%91%D0%BC"
    },
    {
        name: "Малыш",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/CC_The_Kid_1921.jpg/318px-CC_The_Kid_1921.jpg",
        year: 1921,
        producer: ["Чарли Чаплин"],
        genre: ["комедия", "драма", "семейный фильм"],
        link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D1%8B%D1%88_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_1921)"
    }
];
