const events = [
  {
    title: "Outdoor Cinema: Dancing with Danger",
    startRecur: "2026-01-03",
    endRecur: "2026-01-09",
    startTime: "18:00:00+11:00",
    endTime: "22:00:00+11:00",
    description: "",
    tags: ["Free", "Film", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/outdoor-cinema-dancing-with-danger",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
    },
  },
  {
    title: "Shrek The Musical",
    start: "2026-01-07",
    end: "2026-01-11",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.artscentremelbourne.com.au/whats-on/2026/musical/shrek-the-musical",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/oF5TDshryjzAo6WV9",
      },
    ],
    location: {
      address: "Playhouse Theatre, Arts Centre, Melbourne",
    },
  },
  {
    title: "Midsumma Festival",
    start: "2026-01-18",
    end: "2026-02-09",
    description: "",
    tags: ["Festival"],
    links: [
      {
        label: "Website",
        url: "https://www.midsumma.org.au/",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
    },
  },
  {
    title: "My Brilliant Career",
    start: "2026-01-23",
    end: "2026-03-01",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2026/my-brilliant-career/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ER1DcnqUA96YSLtL6",
      },
    ],
    location: {
      address: "Southbank Theatre, Melbourne",
    },
  },
  {
    title: "The Book of Mormon",
    start: "2026-02-06",
    end: "2026-03-16",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://thebookofmormonmusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
      },
    ],
    location: {
      address: "The Princess Theatre, 163 Spring St, Melbourne",
    },
  },
  {
    title: "Garage Band 2026",
    start: "2026-02-07T17:00:00+11:00",
    end: "2026-02-07T19:30:00+11:00",
    description: "",
    tags: ["Free", "Music", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://fedsquare.com/events/garage-band-2026",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ahexrWk6bs1HzTf7A",
      },
    ],
    location: {
      address: "Fed Square, corner Swanston St & Flinders St",
    },
  },
  {
    title: "CLUEDO The Play",
    start: "2026-02-07",
    end: "2026-03-02",
    description: "",
    tags: ["Play", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://cluedoplay.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/hNN1LcomqSEXCrHe6",
      },
    ],
    location: {
      address: "Comedy Theatre, Melbourne",
    },
  },
  {
    title: "The Diary of Anne Frank",
    start: "2026-03-04",
    end: "2026-03-15",
    description: "",
    tags: ["Performance", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://www.athenaeumtheatre.com.au/shows/the-diary-of-anne-frank",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/AVtdpTiQgA9uhugx7",
      },
    ],
    location: {
      address: "Athenaeum Theatre, Melbourne",
    },
  },
  {
    title: "Top Arts 2026",
    start: "2026-03-13",
    end: "2026-07-20",
    description: "",
    tags: ["Exhibition", "Art", "Free"],
    links: [
      {
        label: "Website",
        url: "https://www.ngv.vic.gov.au/exhibition/top-arts-2026/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/V1kcEp4pUCf2iKi46",
      },
    ],
    location: {
      address: "The Ian Potter Centre: NGV Australia, Melbourne",
    },
  },
  {
    title: "The Great Gatsby: A Jazz Ballet Odyssey",
    start: "2026-03-18",
    end: "2026-04-06",
    description: "",
    tags: ["Performance", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://hmt.com.au/the-great-gatsby/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/usjgPTW2Y9QaPm3k6",
      },
    ],
    location: {
      address: "Her Majesty's Theatre, Melbourne",
    },
  },
  {
    title: "Tesselaar Kabloom",
    start: "2026-03-21",
    end: "2026-04-20",
    description: "",
    tags: ["Exhibition", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://kabloom.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/LWSrHvMU7bLFXahr8",
      },
    ],
    location: {
      address: "Tesselaar Flower Farm, Silvan",
    },
  },
  {
    title: "Melbourne International Flower & Garden Show",
    start: "2026-03-25",
    end: "2026-03-30",
    description: "",
    tags: ["Exhibition", "Outdoor"],
    links: [
      {
        label: "Website",
        url: "https://melbflowershow.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/ehgZk8iqN691ZHN96",
      },
    ],
    location: {
      address: "Royal Exhibition Building, Carlton",
    },
  },
  {
    title: "Melbourne International Comedy Festival",
    start: "2026-03-25",
    end: "2026-04-20",
    description: "",
    tags: ["Festival", "Comedy"],
    links: [
      {
        label: "Website",
        url: "https://www.comedyfestival.com.au/",
      },
    ],
    location: {
      address: "Various locations around Melbourne",
    },
  },
  {
    title: "Heathers the Musical",
    start: "2026-04-08",
    end: "2026-05-04",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://heathersthemusical.com/australia/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/oF5TDshryjzAo6WV9",
      },
    ],
    location: {
      address: "Playhouse Theatre, Arts Centre, Melbourne",
    },
  },
  {
    title: "Waitress the Musical",
    start: "2026-05-01",
    end: "2026-06-01",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://waitressthemusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/usjgPTW2Y9QaPm3k6",
      },
    ],
    location: {
      address: "Her Majesty's Theatre, Melbourne",
    },
  },
  {
    title: "The Big Design Market",
    start: "2026-05-22",
    end: "2026-05-25",
    description: "",
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
    },
  },
  {
    title: "Encore! Songs from the Musicals",
    start: "2026-05-28",
    end: "2026-05-31",
    description: "",
    tags: ["Music"],
    links: [
      {
        label: "Website",
        url: "https://opera.org.au/productions/encore-melbourne/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/8gYHTCG7sANgjwWA6",
      },
    ],
    location: {
      address: "Regent Theatre, 191 Collins St, Melbourne",
    },
  },
  {
    title: "Bluey’s Big Play The Stage Show",
    start: "2026-07-01",
    end: "2026-07-13",
    description: "",
    tags: ["Play", "Theatre", "Family and kids"],
    links: [
      {
        label: "Website",
        url: "https://marrinergroup.com.au/shows/blueys-big-play-the-stage-show",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/hNN1LcomqSEXCrHe6",
      },
    ],
    location: {
      address: "Comedy Theatre, Melbourne",
    },
  },
  {
    title: "Pretty Woman the Musical",
    start: "2026-07-14",
    end: "2026-08-10",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://prettywomanthemusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/8gYHTCG7sANgjwWA6",
      },
    ],
    location: {
      address: "Regent Theatre, 191 Collins St, Melbourne",
    },
  },
  {
    title: "SIX the Musical",
    start: "2026-07-24",
    end: "2026-08-24",
    description: "",
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
    },
  },
  {
    title: "A Beautiful Noise: The Neil Diamond Musical",
    start: "2026-08-05",
    end: "2026-09-07",
    description: "",
    tags: ["Musical", "Theatre"],
    links: [
      {
        label: "Website",
        url: "https://theneildiamondmusical.com.au/",
      },
      {
        label: "Google Maps",
        url: "https://maps.app.goo.gl/bP7GfWWjxJAb4NKn9",
      },
    ],
    location: {
      address: "The Princess Theatre, 163 Spring St, Melbourne",
    },
  },
];

export default events;
