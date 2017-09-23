export let RESTAURANTS = [
  {
    id: 1,
    name: "Quan An Ngon",
    address: "18 Phan Boi Chau | Hoan Kiem Dist, Hanoi 100000, Vietnam",
    phone: "84903246963",
    location: {
      lat: 21.030746,
      lon: 105.811913,
      distance: 3.2
    },
    rating: 4.5,
    scores: [
      {
        id: 1,
        name: "Foodies",
        score: 98
      },
      {
        id: 2,
        name: "Family",
        score: 80
      },
      {
        id: 3,
        name: "Local",
        score: 71
      },
      {
        id: 4,
        name: "Budget",
        score: 64
      },
      {
        id: 5,
        name: "Adventure",
        score: 59
      }
    ],
    thumb: "assets/img/restaurant/thumb/img_1.jpg",
    reviews: [
      {
        id: 1,
        username: "Vincent Crispin",
        avatar: "assets/img/user/adam.jpg",
        from: "Melbourne",
        content: "Very busy, but great selection and great food. Prompt and efficient service!",
        rating: 4,
        recommended_for: [1, 3]
      },
      {
        id: 2,
        username: "Dư Đỗ",
        avatar: "assets/img/user/ben.png",
        from: "Hanoi, Vietnam",
        content: "I have come to this restaurant many times. I actually enjoy the food and the atmosphere. Despite the quality of the food being not that great compared to specialized street stalls or shops, the variety of dishes really makes up for it. This one this a good place to try various cuisines and it is most suitable for people who are new to Vietnam and don't have much time to stay.",
        rating: 5,
        recommended_for: [1, 2]
      },
      {
        id: 3,
        username: "Yuanita Ruchyat",
        avatar: "assets/img/user/mike.png",
        from: "Jakarta",
        content: "One stop vietnamese restaurant. You can order almost everything here.Designed with the infamous low chaired vietnamese dining table, you will feel like eating at the street hawker with a",
        rating: 5,
        recommended_for: [2, 3]
      },
      {
        id: 4,
        username: "Leow Cheng Lam",
        avatar: "assets/img/user/perry.png",
        from: "Klang",
        content: "Quan An Ngon is a restaurant. Their food is delicious and healthy. Youn should not missed it",
        rating: 4,
        recommended_for: [4, 3]
      }
    ]
  },
  {
    id: 2,
    name: "Pizza 4P's",
    address: "8/15 Le Thanh Ton Street | District1, Hanoi, Vietnam",
    phone: "84 4 3825 1286",
    location: {
      lat: 21.030756,
      lon: 105.811933,
      distance: 3.2
    },
    rating: 4.2,
    scores: [
      {
        id: 1,
        name: "Budget",
        score: 98
      },
      {
        id: 2,
        name: "Family",
        score: 80
      },
      {
        id: 3,
        name: "Local",
        score: 71
      },
      {
        id: 4,
        name: "Foodies",
        score: 64
      },
      {
        id: 5,
        name: "Adventure",
        score: 59
      }
    ],
    thumb: "assets/img/restaurant/thumb/img_2.jpg",
    reviews: []
  },
  {
    id: 3,
    name: "Green Tangerine",
    address: "48 Hang Be, Hanoi, Vietnam",
    phone: "84 4 3825 1286",
    location: {
      lat: 21.030736,
      lon: 105.812923,
      distance: 3.2
    },
    rating: 4.5,
    scores: [
      {
        id: 1,
        name: "Foodies",
        score: 98
      },
      {
        id: 2,
        name: "Family",
        score: 80
      },
      {
        id: 3,
        name: "Local",
        score: 71
      },
      {
        id: 4,
        name: "Budget",
        score: 64
      },
      {
        id: 5,
        name: "Adventure",
        score: 59
      }
    ],
    thumb: "assets/img/restaurant/thumb/img_3.jpg",
    reviews: []
  },
  {
    id: 4,
    name: "KOTO Restaurant",
    address: "61 Pho Van Mieu, Hanoi Vietnam",
    phone: "+84 4 747 0337",
    location: {
      lat: 21.030756,
      lon: 105.811933,
      distance: 3.2
    },
    rating: 4.2,
    scores: [
      {
        id: 1,
        name: "Adventure",
        score: 98
      },
      {
        id: 2,
        name: "Local",
        score: 80
      },
      {
        id: 3,
        name: "Foodies",
        score: 71
      },
      {
        id: 4,
        name: "Budget",
        score: 64
      },
      {
        id: 5,
        name: "Family",
        score: 59
      }
    ],
    thumb: "assets/img/restaurant/thumb/img_4.jpg",
    reviews: []
  },
  {
    id: 5,
    name: "Hanoi House",
    address: "Level 2, 47A Ly Quoc Su St., Hanoi 10000, Vietnam",
    phone: "+844.23489789",
    location: {
      lat: 21.031746,
      lon: 105.812913,
      distance: 3.2
    },
    rating: 4.5,
    scores: [
      {
        id: 1,
        name: "Foodies",
        score: 98
      },
      {
        id: 2,
        name: "Family",
        score: 80
      },
      {
        id: 3,
        name: "Local",
        score: 71
      },
      {
        id: 4,
        name: "Budget",
        score: 64
      },
      {
        id: 5,
        name: "Adventure",
        score: 59
      }
    ],
    thumb: "assets/img/restaurant/thumb/img_5.jpg",
    reviews: []
  },
  {
    id: 6,
    name: "Nhạc Cafe",
    address: "7 Hang Thung | Quan Hoan Kiem, Hanoi 10000, Vietnam",
    phone: "84439352580",
    location: {
      lat: 21.030746,
      lon: 105.811913,
      distance: 3.2
    },
    rating: 4.5,
    scores: [
      {
        id: 1,
        name: "Foodies",
        score: 98
      },
      {
        id: 2,
        name: "Family",
        score: 80
      },
      {
        id: 3,
        name: "Local",
        score: 71
      },
      {
        id: 4,
        name: "Budget",
        score: 64
      },
      {
        id: 5,
        name: "Adventure",
        score: 59
      }
    ],
    thumb: "assets/img/restaurant/thumb/img_6.jpg",
    reviews: []
  }
]
