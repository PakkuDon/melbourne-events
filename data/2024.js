const events = [
  {
    title: 'Melbourne Out Loud: Life through the lens of Rennie Ellis',
    startRecur: '2024-03-01',
    endRecur: '2025-05-26',
    startTime: '10:00:00+11:00',
    endTime: '18:00:00+11:00',
    description: '',
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.slv.vic.gov.au/whats-on/melbourne-out-loud",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/b5RHnCYqDCi9KFAm6",
      },
    ],
    location: {
      address: "State Library Victoria, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/b5RHnCYqDCi9KFAm6",
    },
  },
  {
    title: 'Joy',
    startRecur: '2024-03-01',
    endRecur: '2025-08-30',
    startTime: '10:00:00+11:00',
    endTime: '17:00:00+11:00',
    description: '',
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://museumsvictoria.com.au/immigrationmuseum/whats-on/joy/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahS9e1yDSvFZcueq7",
      },
    ],
    location: {
      address: "Immigration Museum, 400 Flinders St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ahS9e1yDSvFZcueq7",
    },
  },
  {
    title: 'WICKED the Musical',
    start: '2024-03-02',
    end: '2024-08-26',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://wickedthemusical.com.au/tickets/melbourne/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/8gYHTCG7sANgjwWA6",
      },
    ],
    location: {
      address: "Regent Theatre, 191 Collins St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/8gYHTCG7sANgjwWA6",
    },
  },
  {
    title: 'Sunset Boulevard',
    start: '2024-05-21',
    end: '2024-08-11',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://sunsetmusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
      },
    ],
    location: {
      address: "The Princess Theatre, 163 Spring St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
    },
  },
  {
    title: 'Beings by Universal Everything',
    startRecur: '2024-05-22',
    endRecur: '2024-09-30',
    startTime: '10:00:00+11:00',
    endTime: '17:00:00+11:00',
    description: '',
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.acmi.net.au/whats-on/beings/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/BUCXHx6a2VHVbkev8",
      },
    ],
    location: {
      address: "ACMI, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/BUCXHx6a2VHVbkev8",
    },
  },
  {
    title: 'RISING: Melbourne',
    start: '2024-06-01',
    end: '2024-06-17',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://2024.rising.melbourne/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Lightscape',
    startRecur: '2024-06-14',
    endRecur: '2024-08-05',
    startTime: '17:00:00+11:00',
    endTime: '22:00:00+11:00',
    daysOfWeek: [0, 3, 4, 5, 6],
    description: '',
    tags: ["Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.lightscapeaustralia.com/city/melbourne.html",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/t6BCr59sBJc6BJXG9",
      },
    ],
    location: {
      address: "Royal Botanic Gardens Victoria, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/t6BCr59sBJc6BJXG9",
    },
  },
  {
    title: 'Pharoah',
    start: '2024-06-14',
    end: '2024-10-07',
    description: `Exhibition celebrating ancient Egyptian art and culture
    `,
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/pharaoh/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
      },
    ],
    location: {
      address: "National Gallery of Victoria, 180 St Kilda Rd, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
    },
  },
  {
    title: `Disney's Beauty and the Beast the Musical`,
    start: '2024-06-29',
    end: '2025-04-21',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://beautyandthebeastmusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/nh9yT4LmafjFLAt86",
      },
    ],
    location: {
      address: "Her Majesty's Theatre, 219 Exhibition St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/nh9yT4LmafjFLAt86",
    },
  },
  {
    title: 'Firelight Festival',
    startRecur: '2024-06-28',
    endRecur: '2024-07-01',
    startTime: '17:00:00+11:00',
    endTime: '22:00:00+11:00',
    description: '',
    tags: ["Festival", "Outdoor", "Free"],
    links: [
      {
        label: "Website",
        url: "https://firelight.melbourne.vic.gov.au/festival/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/PXUGSVipCtXtwEyUA",
      },
    ],
    location: {
      address: "Harbour Esplanade, Docklands",
      googleMapsUrl: "https://maps.app.goo.gl/PXUGSVipCtXtwEyUA",
    },
  },
  {
    title: 'Firelight Labyrinth',
    start: '2024-06-28',
    end: '2024-07-15',
    description: '',
    tags: ["Installation"],
    links: [
      {
        label: "Website",
        url: "https://firelight.melbourne.vic.gov.au/labyrinth/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/Piozzipi77WBatUx5",
      },
    ],
    location: {
      address: "Marvel Stadium, 740 Bourke St, Docklands",
      googleMapsUrl: "https://maps.app.goo.gl/Piozzipi77WBatUx5",
    },
  },
  {
    title: 'Victoria the T. rex',
    startTime: '09:00:00+11:00',
    endTime: '17:00:00+11:00',
    startRecur: '2024-06-28',
    endRecur: '2024-10-21',
    description: '',
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://museumsvictoria.com.au/melbournemuseum/whats-on/victoria-the-t-rex/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/swBLScA46YegEVtH8",
      },
    ],
    location: {
      address: "Melbourne Museum, 11 Nicholson St, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/swBLScA46YegEVtH8",
    },
  },
  {
    title: 'Winter Night Market | Queen Victoria Market',
    startTime: '17:00:00+11:00',
    endTime: '22:00:00+11:00',
    startRecur: '2024-06-05',
    endRecur: '2024-08-29',
    daysOfWeek: [3],
    description: '',
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://thenightmarket.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
      },
    ],
    location: {
      address: "Queen Victoria Market, Queen St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
    },
  },
  {
    title: 'Replay Festival',
    start: '2024-07-02',
    end: '2024-08-04',
    description: '',
    tags: ["Festival", "Comedy"],
    links: [
      {
        label: "Shows playing at Comedy Republic",
        url: "https://www.comedyrepublic.com.au/events/?season=REPLAY24",
      },
      {
        label: "Shows playing at Arts Centre Melbourne",
        url: "https://www.artscentremelbourne.com.au/festival-and-series/replay-festival",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
      },
    ],
    location: {
      address: "Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'The Finders Keepers Design Market',
    start: '2024-07-12',
    end: '2024-07-15',
    description: '',
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://www.thefinderskeepers.com/melbourne-markets/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
      },
    ],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'The Little Food Market',
    start: '2024-07-19',
    end: '2024-07-22',
    description: '',
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://thelittlefoodmarket.com/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
      },
    ],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'Open House Melbourne',
    start: '2024-07-27',
    end: '2024-07-29',
    description: '',
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://openhousemelbourne.org/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'SIX the Musical',
    start: '2024-08-02',
    end: '2024-10-21',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://sixthemusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/hNN1LcomqSEXCrHe6",
      },
    ],
    location: {
      address: "Comedy Theatre, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/hNN1LcomqSEXCrHe6",
    },
  },
  {
    title: 'Melbourne International Film Festival',
    start: '2024-08-08',
    end: '2024-08-26',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://miff.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Now or Never',
    start: '2024-08-22',
    end: '2024-09-01',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://nowornever.melbourne.vic.gov.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Affordable Art Fair Melbourne',
    start: '2024-08-29',
    end: '2024-09-02',
    description: '',
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://affordableartfair.com/fairs/melbourne/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
      },
    ],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'South East Asia Festival | Queen Victoria Market',
    startRecur: '2024-09-07',
    endRecur: '2024-09-09',
    startTime: '09:00:00+10:00',
    endTime: '16:00:00+10:00',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://qvm.com.au/whats-on/south-east-asia-festival/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
      },
    ],
    location: {
      address: "Queen Victoria Market, Queen St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
    },
  },
  {
    title: 'CherryHill Orchards Blossom Festival',
    start: '2024-09-09',
    end: '2024-09-30',
    description: '',
    tags: ["Festival", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://cherryhill.com.au/events/blossom-festival/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/p5ty9KjNDiQbSqRj7",
      },
    ],
    location: {
      address: "CherryHill Orchards, Coldstream",
      googleMapsUrl: "https://maps.app.goo.gl/p5ty9KjNDiQbSqRj7",
    },
  },
  {
    title: 'Honk! Untitled Goose Exhibition',
    startRecur: '2024-09-17',
    endRecur: '2025-02-17',
    startTime: '10:00:00+11:00',
    endTime: '17:00:00+11:00',
    description: '',
    tags: ["Exhibition", "Free"],
    links: [
      {
        label: "Website",
        url: "https://www.acmi.net.au/whats-on/honk-untitled-goose-exhibition/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/BUCXHx6a2VHVbkev8",
      },
    ],
    location: {
      address: "ACMI, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/BUCXHx6a2VHVbkev8",
    },
  },
  {
    title: 'Accidentally Wes Anderson: The Exhibition',
    startRecur: '2024-09-18',
    endRecur: '2024-11-04',
    startTime: '10:00:00+11:00',
    endTime: '17:30:00+11:00',
    daysOfWeek: [0, 3, 4, 5, 6],
    description: '',
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://awaexhibition.com/melbourne/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/zJ32Vm8iZKsYEofN9",
      },
    ],
    location: {
      address: "Level 1, 360 Bourke St, Melbourne 3000",
      googleMapsUrl: "https://maps.app.goo.gl/zJ32Vm8iZKsYEofN9",
    },
  },
  {
    title: 'Fringe Flavours Night Market | Queen Victoria Market',
    startTime: '17:00:00+11:00',
    endTime: '22:00:00+11:00',
    startRecur: '2024-09-18',
    endRecur: '2024-10-17',
    daysOfWeek: [3],
    description: '',
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://thenightmarket.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
      },
    ],
    location: {
      address: "Queen Victoria Market, Queen St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
    },
  },
  {
    title: 'CherryHill Orchards Blossom By Light',
    start: '2024-09-20',
    end: '2024-09-23',
    description: '',
    tags: ["Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://cherryhill.com.au/events/blossom-festival/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/uP2zxbn8rqjL2Uow7",
      },
    ],
    location: {
      address: "CherryHill Orchards, Wandin East",
      googleMapsUrl: "https://maps.app.goo.gl/uP2zxbn8rqjL2Uow7",
    },
  },
  {
    title: 'Mid-Autumn Moon Festival | Queen Victoria Market',
    startRecur: '2024-09-21',
    endRecur: '2024-09-23',
    startTime: '09:00:00+10:00',
    endTime: '16:00:00+10:00',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://qvm.com.au/whats-on/mid-autumn-moon-festival/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
      },
    ],
    location: {
      address: "Queen Victoria Market, Queen St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
    },
  },
  {
    title: 'Tina: The Tina Turner Musical',
    start: '2024-09-21',
    end: '2025-03-03',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://tinathemusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
      },
    ],
    location: {
      address: "The Princess Theatre, 163 Spring St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
    },
  },
  {
    title: 'Melbourne Royal Show',
    start: '2024-09-26',
    end: '2024-10-07',
    description: '',
    tags: ["Festival", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://royalshow.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/apnjgN8oXs1KwwDd8",
      },
    ],
    location: {
      address: "Melbourne Showgrounds, Ascot Vale",
      googleMapsUrl: "https://maps.app.goo.gl/apnjgN8oXs1KwwDd8",
    },
  },
  {
    title: 'Melbourne Fringe Festival',
    start: '2024-10-01',
    end: '2024-10-21',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://melbournefringe.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Melbourne International Games Week (MIGW)',
    start: '2024-10-05',
    end: '2024-10-14',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://gamesweek.melbourne/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Big Games Night Out',
    start: '2024-10-10 15:00',
    end: '2024-10-10 23:55',
    description: '',
    tags: ["Gaming", "Free"],
    links: [
      {
        label: "Website",
        url: "https://gamesweek.melbourne/BGNO",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'The Finders Keepers Design Market',
    start: '2024-10-11',
    end: '2024-10-14',
    description: '',
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://www.thefinderskeepers.com/melbourne-markets/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
      },
    ],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'PAX Aus',
    start: '2024-10-11',
    end: '2024-10-14',
    description: '',
    tags: ["Convention", "Gaming"],
    links: [
      {
        label: "Website",
        url: "https://aus.paxsite.com/en-us.html",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/GnGf5rSD8pAWTA4d7",
      },
    ],
    location: {
      address: "Melbourne Convention and Exhibition Centre (MCEC), South Wharf",
      googleMapsUrl: "https://maps.app.goo.gl/GnGf5rSD8pAWTA4d7",
    },
  },
  {
    title: 'REKOSPECTIVE: The Art of Reko Rennie',
    start: '2024-10-11',
    end: '2025-01-28',
    description: '',
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/rekospective-the-art-of-reko-rennie/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/tfHEWQphQBBaVqR99",
      },
    ],
    location: {
      address: "The Ian Potter Centre: NGV Australia, Fed Square",
      googleMapsUrl: "https://maps.app.goo.gl/tfHEWQphQBBaVqR99",
    },
  },
  {
    title: '100 Years Film Festival',
    start: '2024-10-13',
    end: '2024-11-06',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.rmit.edu.au/thecapitol/100years",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/NUUWnKPS3RvUXXfb8",
      },
    ],
    location: {
      address: "The Capitol, 113 Swanston St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/NUUWnKPS3RvUXXfb8",
    },
  },
  {
    title: 'Melbourne International Jazz Festival',
    start: '2024-10-18',
    end: '2024-10-28',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.melbournejazz.com/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'The Big Vegan Market',
    start: '2024-10-19',
    end: '2024-10-21',
    description: '',
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://bigveganmarket.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
      },
    ],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'Melbourne Fashion Week',
    start: '2024-10-21',
    end: '2024-10-28',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://mfw.melbourne.vic.gov.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'Asia Oasis Street Food Festival',
    start: '2024-10-24',
    end: '2024-10-28',
    description: '',
    tags: ["Festival", "Food", "Free"],
    links: [
      {
        label: "Website",
        url: "https://asiaoasis.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/CafM2SaHPRGiHL6y7",
      },
    ],
    location: {
      address: "Alexandra Gardens, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/CafM2SaHPRGiHL6y7",
    },
  },
  {
    title: 'Victorian Festival of Diwali',
    start: '2024-10-26T12:30:00+11:00',
    end: '2024-10-26T22:00:00+11:00',
    description: ``,
    tags: ["Festival", "Outdoor"],
    links: [
      {
        label: "What's On Melbourne listing",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/victorian-festival-of-diwali",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'Cats & Dogs',
    startRecur: '2024-11-01',
    endRecur: '2025-07-21',
    startTime: '10:00:00+11:00',
    endTime: '17:00:00+11:00',
    description: '',
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/cats-and-dogs/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/tfHEWQphQBBaVqR99",
      },
    ],
    location: {
      address: "The Ian Potter Centre: NGV Australia, Fed Square",
      googleMapsUrl: "https://maps.app.goo.gl/tfHEWQphQBBaVqR99",
    },
  },
  {
    title: 'Sister Act the Musical',
    start: '2024-11-03',
    end: '2025-01-27',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://sisteractthemusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/8gYHTCG7sANgjwWA6",
      },
    ],
    location: {
      address: "Regent Theatre, 191 Collins St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/8gYHTCG7sANgjwWA6",
    },
  },
  {
    title: 'Peter and the Starcatcher',
    start: '2024-11-08',
    end: '2024-12-01',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://peterandthestarcatcher.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/oF5TDshryjzAo6WV9",
      },
    ],
    location: {
      address: "Playhouse Theatre, Arts Centre, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/oF5TDshryjzAo6WV9",
    },
  },
  {
    title: 'State Rose & Garden Show',
    start: '2024-11-09',
    end: '2024-11-11',
    description: '',
    tags: ["Exhibition", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.wyndham.vic.gov.au/events-experiences/wyndham-citys-major-events/state-rose-garden-show",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/uqx4KanuLxzBkERr8",
      },
    ],
    location: {
      address: "Victoria State Rose Garden, Werribee South",
      googleMapsUrl: "https://maps.app.goo.gl/uqx4KanuLxzBkERr8",
    },
  },
  {
    title: 'Polish Festival',
    start: '2024-11-10T10:00:00+11:00',
    end: '2024-11-10T18:00:00+11:00',
    description: ``,
    tags: ["Festival", "Free", "Outdoor"],
    links: [
      {
        label: "What's On Melbourne listing",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/polish-festival-2024",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'African Music and Cultural Festival',
    start: '2024-11-15',
    end: '2024-11-18',
    description: ``,
    tags: ["Festival", "Free", "Outdoor"],
    links: [
      {
        label: "What's On Melbourne listing",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/african-music-and-cultural-festival",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'Summer Night Market | Queen Victoria Market',
    startTime: '17:00:00+11:00',
    endTime: '22:00:00+11:00',
    startRecur: '2024-11-20',
    endRecur: '2025-03-13',
    daysOfWeek: [3],
    description: '',
    tags: ["Market", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://thenightmarket.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
      },
    ],
    location: {
      address: "Queen Victoria Market, Queen St, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/XL5zduSz3zMnbkEy8",
    },
  },
  {
    title: 'Always Live',
    start: '2024-11-22',
    end: '2024-12-09',
    description: '',
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.alwayslive.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/KiJMtMHjc67QzHDi6",
    },
  },
  {
    title: 'A Christmas Carol',
    start: '2024-11-22',
    end: '2024-12-30',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://christmascarolaustralia.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/hNN1LcomqSEXCrHe6",
      },
    ],
    location: {
      address: "Comedy Theatre, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/hNN1LcomqSEXCrHe6",
    },
  },
  {
    title: 'The Future & Other Fictions',
    startRecur: '2024-11-24',
    endRecur: '2025-04-28',
    startTime: '10:00:00+11:00',
    endTime: '17:00:00+11:00',
    description: '',
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.acmi.net.au/whats-on/future-fictions/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/BUCXHx6a2VHVbkev8",
      },
    ],
    location: {
      address: "ACMI, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/BUCXHx6a2VHVbkev8",
    },
  },
  {
    title: 'The Big Design Market',
    start: '2024-11-29',
    end: '2024-12-02',
    description: '',
    tags: ["Market"],
    links: [
      {
        label: "Website",
        url: "https://melbourne.thebigdesignmarket.com/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
      },
    ],
    location: {
      address: "Royal Exhibition Building, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
    },
  },
  {
    title: 'Moonlight Cinema',
    startTime: '19:30:00+11:00',
    endTime: '23:00:00+11:00',
    startRecur: '2024-11-29',
    endRecur: '2025-03-31',
    daysOfWeek: [0, 2, 3, 4, 5, 6],
    description: "",
    tags: ["Film", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://melbourne.moonlight.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/t6BCr59sBJc6BJXG9",
      },
    ],
    location: {
      address: "Royal Botanic Gardens Victoria, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/t6BCr59sBJc6BJXG9",
    },
  },
  {
    title: 'Taste of Combat',
    start: '2024-12-02',
    end: '2025-11-24',
    description: '',
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://www.shrine.org.au/taste-combat",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/sGQWzRy4oCdVMyUs7",
      },
    ],
    location: {
      address: "Shrine of Remembrance, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/sGQWzRy4oCdVMyUs7",
    },
  },
  {
    title: 'DARKFIELD',
    start: '2024-12-13',
    end: '2025-02-24',
    description: `Featuring SÉANCE and FLIGHT`,
    tags: ["Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.darkfield.com.au/melbourne",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/5uJJAiDw8H8kCt3L7",
      },
    ],
    location: {
      address: "Arts Centre Melbourne, 100 St Kilda Rd",
      googleMapsUrl: "https://maps.app.goo.gl/5uJJAiDw8H8kCt3L7",
    },
  },
  {
    title: 'Dear Evan Hansen Musical',
    start: '2024-12-14',
    end: '2025-02-17',
    description: '',
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.dearevanhansenmusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/oF5TDshryjzAo6WV9",
      },
    ],
    location: {
      address: "Playhouse Theatre, Arts Centre, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/oF5TDshryjzAo6WV9",
    },
  },
  {
    title: 'Antopia',
    startTime: '09:00:00+11:00',
    endTime: '17:00:00+11:00',
    startRecur: '2024-12-14',
    endRecur: '2025-03-11',
    description: "",
    tags: ["Exhibition"],
    links: [
      {
        label: "Website",
        url: "https://museumsvictoria.com.au/melbournemuseum/whats-on/antopia/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/swBLScA46YegEVtH8",
      },
    ],
    location: {
      address: "Melbourne Museum, 11 Nicholson St, Carlton",
      googleMapsUrl: "https://maps.app.goo.gl/swBLScA46YegEVtH8",
    },
  },
  {
    title: 'Yayoi Kusama',
    startRecur: '2024-12-15',
    endRecur: '2025-04-22',
    startTime: '10:00:00+10:00',
    endTime: '17:00:00+10:00',
    description: '',
    tags: ["Exhibition", "Art"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/yayoi-kusama/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
      },
    ],
    location: {
      address: "National Gallery of Victoria, 180 St Kilda Rd, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/ZrR1RKjyPGWyZ8qh9",
    },
  },
  {
    title: 'Christmas Outdoor Cinema',
    start: '2024-12-16',
    end: '2024-12-24',
    description: '',
    tags: ["Free", "Film", "Outdoor"],
    links: [
      {
        label: "Program",
        url: "https://fedsquare.com/events/christmas-outdoor-cinema",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: 'As Camp as Christmas',
    start: '2024-12-20T18:00:00+11:00',
    end: '2024-12-20T22:00:00+11:00',
    description: ``,
    tags: ["Free", "Performance", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/as-camp-as-christmas/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
      googleMapsUrl: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
    },
  },
  {
    title: "Vision Australia's Carols by Candlelight",
    start: '2024-12-24T20:00+11:00',
    end: '2024-12-24T23:30+11:00',
    description: '',
    tags: ["Performance", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://www.artscentremelbourne.com.au/whats-on/2024/contemporary-music/carols-by-candlelight",
      },
      {
        label: "Google Maps",
        url: "",
      },
    ],
    location: {
      address: "Sidney Myer Music Bowl, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/LAHceVEECBY9uF9E8",
    },
  },
  {
    title: 'Van Gogh at THE LUME',
    start: '2024-12-26',
    end: '2025-06-02',
    description: '',
    tags: ["Art", "Exhibition"],
    links: [
      {
        label: "Website",
        url: "",
      },
      {
        label: "Google Maps",
        url: "",
      },
    ],
    location: {
      address: "THE LUME, Melbourne",
      googleMapsUrl: "https://maps.app.goo.gl/jUsZvqXhu88nLFUG9",
    },
  },
]

export default events