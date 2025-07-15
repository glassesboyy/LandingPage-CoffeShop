export type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  signature: boolean;
};

export const menuItems = {
  coffee: [
    {
      name: "Espresso",
      price: "Rp 25.000",
      description: "Shot espresso murni dengan crema sempurna",
      image: "/assets/menu/menu.jpg",
      category: "coffee",
      signature: false,
    },
    {
      name: "Americano",
      price: "Rp 28.000",
      description: "Espresso dengan air panas, rasa kopi yang kuat",
      image: "/assets/menu/menu.jpg",
      category: "coffee",
      signature: false,
    },
    {
      name: "Cappuccino",
      price: "Rp 30.000",
      description: "Espresso dengan steamed milk dan foam tebal",
      image: "/assets/menu/menu.jpg",
      category: "coffee",
      signature: false,
    },
    {
      name: "Signature Latte",
      price: "Rp 35.000",
      description: "Latte premium dengan latte art cantik",
      image: "/assets/menu/menu.jpg",
      category: "coffee",
      signature: false,
    },
    {
      name: "Cold Brew Special",
      price: "Rp 32.000",
      description: "Cold brew 12 jam dengan rasa smooth",
      image: "/assets/menu/menu.jpg",
      category: "coffee",
      signature: false,
    },
    {
      name: "Flat White",
      price: "Rp 33.000",
      description: "Double shot espresso dengan microfoam",
      image: "/assets/menu/menu.jpg",
      category: "coffee",
      signature: false,
    },
  ],
  nonCoffee: [
    {
      name: "Hot Chocolate",
      price: "Rp 30.000",
      description: "Cokelat panas premium dengan whipped cream",
      image: "/assets/menu/menu3.jpg",
      category: "nonCoffee",
      signature: false,
    },
    {
      name: "Matcha Latte",
      price: "Rp 32.000",
      description: "Matcha premium dengan steamed milk",
      image: "/assets/menu/menu3.jpg",
      category: "nonCoffee",
      signature: false,
    },
    {
      name: "Earl Grey Tea",
      price: "Rp 25.000",
      description: "Teh Earl Grey dengan aroma bergamot",
      image: "/assets/menu/menu3.jpg",
      category: "nonCoffee",
      signature: false,
    },
    {
      name: "Iced Chocolate",
      price: "Rp 28.000",
      description: "Cokelat dingin dengan es dan whipped cream",
      image: "/assets/menu/menu3.jpg",
      category: "nonCoffee",
      signature: false,
    },
  ],
  food: [
    {
      name: "Croissant Butter",
      price: "Rp 20.000",
      description: "Croissant segar dengan butter premium",
      image: "/assets/menu/menu5.jpg",
      category: "food",
      signature: false,
    },
    {
      name: "Sandwich Club",
      price: "Rp 45.000",
      description: "Sandwich dengan ayam, sayuran segar, dan saus special",
      image: "/assets/menu/menu5.jpg",
      category: "food",
      signature: false,
    },
    {
      name: "Pasta Carbonara",
      price: "Rp 55.000",
      description: "Pasta dengan saus carbonara creamy dan bacon",
      image: "/assets/menu/menu5.jpg",
      category: "food",
      signature: false,
    },
    {
      name: "Cheesecake",
      price: "Rp 35.000",
      description: "Cheesecake lembut dengan berry sauce",
      image: "/assets/menu/menu5.jpg",
      category: "food",
      signature: false,
    },
  ],
  signature: [
    {
      name: "Signature Latte",
      price: "Rp 35.000",
      description: "Latte premium dengan latte art cantik",
      image: "/assets/menu/menu4.jpg",
      category: "coffee",
      signature: true,
    },
    {
      name: "Cold Brew Special",
      price: "Rp 32.000",
      description: "Cold brew 12 jam dengan rasa smooth",
      image: "/assets/menu/menu4.jpg",
      category: "coffee",
      signature: true,
    },
    {
      name: "Affogato Delight",
      price: "Rp 38.000",
      description: "Es krim vanilla dengan espresso shot",
      image: "/assets/menu/menu4.jpg",
      category: "signature",
      signature: true,
    },
    {
      name: "Pasta Carbonara",
      price: "Rp 55.000",
      description: "Pasta dengan saus carbonara creamy dan bacon",
      image: "/assets/menu/menu4.jpg",
      category: "food",
      signature: true,
    },
  ],
};
