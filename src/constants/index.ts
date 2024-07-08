// Navbar links

type navLink = {
  title: string;
  path: string;
};

export const NavLinks: navLink[] = [
  {
    title: "Главная",
    path: "#",
  },
  {
    title: "Туры",
    path: "#tours",
  },
  {
    title: "Преимущества",
    path: "#advantages",
  },
  {
    title: "Отзывы",
    path: "#reviews",
  },
  {
    title: "О нас",
    path: "#contact",
  },
];

// Tour card slides

type tourCard = {
  img: string;
  title: string;
  price: number;
  day: string;
};

export const TourCards: tourCard[] = [
  {
    img: "/heroSlides/1.png",
    title: "Дубай",
    price: 500,
    day: "5 ночей, all-inclusive",
  },
  {
    img: "/heroSlides/2.png",
    title: "Дубай",
    price: 500,
    day: "5 ночей, all-inclusive",
  },
  {
    img: "/heroSlides/3.png",
    title: "Дубай",
    price: 500,
    day: "5 ночей, all-inclusive",
  },
  {
    img: "/heroSlides/4.png",
    title: "Дубай",
    price: 500,
    day: "5 ночей, all-inclusive",
  },
  {
    img: "/heroSlides/5.png",
    title: "Дубай",
    price: 500,
    day: "5 ночей, all-inclusive",
  },
  {
    img: "/heroSlides/6.png",
    title: "Дубай",
    price: 500,
    day: "5 ночей, all-inclusive",
  },
];

// review cards

type reviewCard = {
  comment: string;
  authorName: string;
  authorPic: string;
  authorLocation: string;
};

export const reviewCards: reviewCard[] = [
  {
    comment:
      "Наше путешествие в Шарм-эль-Шейх с Royaltour было невероятным! Я хочу выразить огромную благодарность агентству за великолепную организацию. От момента бронирования до возвращения домой всё было на высшем уровне. Прекрасный отель, потрясающий пляж и увлекательные экскурсии — всё это сделало наш отдых незабываемым",
    authorName: "Абдувалиев Абдулазиз",
    authorLocation: "Ташкент , Узбекистан",
    authorPic: "/reviews/profile.png",
  },
  {
    comment:
      "Наше путешествие в Шарм-эль-Шейх с Royaltour было невероятным! Я хочу выразить огромную благодарность агентству за великолепную организацию. От момента бронирования до возвращения домой всё было на высшем уровне. Прекрасный отель, потрясающий пляж и увлекательные экскурсии — всё это сделало наш отдых незабываемым",
    authorName: "Абдувалиев Абдулазиз",
    authorLocation: "Ташкент , Узбекистан",
    authorPic: "/reviews/profile.png",
  },
  {
    comment:
      "Наше путешествие в Шарм-эль-Шейх с Royaltour было невероятным! Я хочу выразить огромную благодарность агентству за великолепную организацию. От момента бронирования до возвращения домой всё было на высшем уровне. Прекрасный отель, потрясающий пляж и увлекательные экскурсии — всё это сделало наш отдых незабываемым",
    authorName: "Абдувалиев Абдулазиз",
    authorLocation: "Ташкент , Узбекистан",
    authorPic: "/reviews/profile.png",
  },
  {
    comment:
      "Наше путешествие в Шарм-эль-Шейх с Royaltour было невероятным! Я хочу выразить огромную благодарность агентству за великолепную организацию. От момента бронирования до возвращения домой всё было на высшем уровне. Прекрасный отель, потрясающий пляж и увлекательные экскурсии — всё это сделало наш отдых незабываемым",
    authorName: "Абдувалиев Абдулазиз",
    authorLocation: "Ташкент , Узбекистан",
    authorPic: "/reviews/profile.png",
  },
  {
    comment:
      "Наше путешествие в Шарм-эль-Шейх с Royaltour было невероятным! Я хочу выразить огромную благодарность агентству за великолепную организацию. От момента бронирования до возвращения домой всё было на высшем уровне. Прекрасный отель, потрясающий пляж и увлекательные экскурсии — всё это сделало наш отдых незабываемым",
    authorName: "Абдувалиев Абдулазиз",
    authorLocation: "Ташкент , Узбекистан",
    authorPic: "/reviews/profile.png",
  },
];
