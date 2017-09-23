export let ATTRACTIONS = [
  {
    id: 1,
    name: "Hoan Kiem Lake",
    address: "Pho Le Thai To, Hanoi Vietnam",
    location: {
      lat: 21.030746,
      lon: 105.811913,
      distance: 3.2
    },
    rating: 4.5,
    scores: [
      {
        id: 1,
        name: "Outdoor Enthusiasts",
        score: 98
      },
      {
        id: 2,
        name: "Local Culture",
        score: 80
      },
      {
        id: 3,
        name: "Family Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Backpackers",
        score: 64
      },
      {
        id: 5,
        name: "Budget Travelers",
        score: 59
      }
    ],
    thumb: "assets/img/attraction/thumb/img_1.jpg",
    reviews: [
      {
        id: 1,
        username: "Vincent Crispin",
        avatar: "assets/img/user/adam.jpg",
        from: "Melbourne",
        content: "Awesome lake to chill out and half a beer on a bench or go for a jog around the pathways. Good way to meet locals also.",
        rating: 4,
        recommended_for: [1, 3]
      },
      {
        id: 2,
        username: "Dư Đỗ",
        avatar: "assets/img/user/ben.png",
        from: "Hanoi, Vietnam",
        content: "One of the best things to do when in Hanoi is to simply wander around the city, taking in the smells of hot and sour street food being made, the chatter of people enjoying a Bia Hoi (local fresh beer) on the street and the beautiful chaos of workers hawking their wares or fixing a bundle of tangles electrical cables. ",
        rating: 5,
        recommended_for: [1, 2]
      },
      {
        id: 3,
        username: "Yuanita Ruchyat",
        avatar: "assets/img/user/mike.png",
        from: "Jakarta",
        content: "Very popular lake in Old quarter. Very beautiful. Check it out at night for a very enchanting experience. You can definitely feel the French influence.",
        rating: 5,
        recommended_for: [2, 3]
      },
      {
        id: 4,
        username: "Leow Cheng Lam",
        avatar: "assets/img/user/perry.png",
        from: "Klang",
        content: "This is a well-known landmark in the heart of Hanoi's Old Quarter. Folklore says this is the site where a giant golden turtle stole a magical sword, thus ending the war. Because of this story, many people visit this lake to pay their respect. It's a nice place to wander around and people watch when you need to get away from the bustle of the city.",
        rating: 4,
        recommended_for: [4, 3]
      }
    ]
  },
  {
    id: 2,
    name: "Hanoi Old Quarter",
    address: "Hanoi, Vietnam",
    location: {
      lat: 21.030446,
      lon: 105.811813,
      distance: 3.2
    },
    rating: 4.5,
    scores: [
      {
        id: 1,
        name: "Local Culture",
        score: 98
      },
      {
        id: 2,
        name: "Outdoor Enthusiasts",
        score: 80
      },
      {
        id: 3,
        name: "Family Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Backpackers",
        score: 64
      },
      {
        id: 5,
        name: "Budget Travelers",
        score: 59
      }
    ],
    thumb: "assets/img/attraction/thumb/img_2.jpg",
    reviews: []
  },
  {
    id: 3,
    name: "One Pillar Pagoda",
    address: "Pho Ong Ich Kiem, Hanoi Vietnam",
    location: {
      lat: 21.0302246,
      lon: 105.811313,
      distance: 3.2
    },
    rating: 4.5,
    scores: [
      {
        id: 1,
        name: "Outdoor Enthusiasts",
        score: 98
      },
      {
        id: 2,
        name: "Local Culture",
        score: 80
      },
      {
        id: 3,
        name: "Family Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Backpackers",
        score: 64
      },
      {
        id: 5,
        name: "Budget Travelers",
        score: 59
      }
    ],
    thumb: "assets/img/attraction/thumb/img_3.jpg",
    reviews: []
  },
  {
    id: 4,
    name: "Hanoi Opera House",
    address: "59, Lý Thái Tổ, Q.Hoàn Kiếm, Việt Nam",
    location: {
      lat: 21.030666,
      lon: 105.811623,
      distance: 3.2
    },
    rating: 4.5,
    scores: [
      {
        id: 1,
        name: "Outdoor Enthusiasts",
        score: 98
      },
      {
        id: 2,
        name: "Local Culture",
        score: 80
      },
      {
        id: 3,
        name: "Family Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Backpackers",
        score: 64
      },
      {
        id: 5,
        name: "Budget Travelers",
        score: 59
      }
    ],
    thumb: "assets/img/attraction/thumb/img_4.jpg",
    reviews: []
  },
  {
    id: 5,
    name: "Ho Tay Lake Water Park",
    address: "614 Pho Lac Long Can, Hanoi Vietnam",
    location: {
      lat: 21.030746,
      lon: 105.811813,
      distance: 3.2
    },
    rating: 4.5,
    scores: [
      {
        id: 1,
        name: "Outdoor Enthusiasts",
        score: 98
      },
      {
        id: 2,
        name: "Local Culture",
        score: 80
      },
      {
        id: 3,
        name: "Family Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Backpackers",
        score: 64
      },
      {
        id: 5,
        name: "Budget Travelers",
        score: 59
      }
    ],
    thumb: "assets/img/attraction/thumb/img_5.jpg",
    reviews: []
  },
  {
    id: 6,
    name: "Halong Bay Cruises",
    address: "6 Nguyen Quang Bich, Hoan Kiem, Hanoi, Vietnam",
    location: {
      lat: 21.030756,
      lon: 105.811923,
      distance: 3.2
    },
    rating: 4.5,
    scores: [
      {
        id: 1,
        name: "Outdoor Enthusiasts",
        score: 98
      },
      {
        id: 2,
        name: "Local Culture",
        score: 80
      },
      {
        id: 3,
        name: "Family Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Backpackers",
        score: 64
      },
      {
        id: 5,
        name: "Budget Travelers",
        score: 59
      }
    ],
    thumb: "assets/img/attraction/thumb/img_6.jpg",
    reviews: []
  }
]
