const moviesConfig = [
  {
    type: 'Movies',
    value: 'movies',
    icon: 'moviesIcon',
    data: [
      {
        name: 'Release Calander',
        value: 'release',
      },
      {
        name: 'Top 250 Movies',
        value: 'topTwoFiftyMovies',
      },
      {
        name: 'Most Popular Movies',
        value: 'mostPopular',
      },
      {
        name: 'Browse Movies by Genre',
        value: 'browseByGenre',
      },
      {
        name: 'Top Box Office',
        value: 'topBoxOffice',
      },
      {
        name: 'Showtime & Tickets',
        value: 'showtimeTickets',
      },
      {
        name: 'Movie News',
        value: 'movieNews',
      },
      {
        name: 'Indie Movie Spotlight',
        value: 'indieMovieSpotlight',
      },
    ],
  },
];

const tvConfig = [
  {
    type: 'TV Shows',
    value: 'tvShows',
    icon: 'televisionIcon',
    data: [
      {
        name: "What's On TV & Streaming",
        value: 'tvAndStreaming',
      },
      {
        name: 'Top 250 TV Shows',
        value: 'topTwoFiftyShows',
      },
      {
        name: 'Most Popular TV Shows',
        value: 'random1',
      },
      {
        name: 'Browse TV Shows by Genre',
        value: 'random2',
      },
      {
        name: 'TV News',
        value: 'random3',
      },
    ],
  },
];

const watchConfig = [
  {
    type: 'Watch',
    value: 'watch',
    icon: 'watchOnlineIcon',
    data: [
      {
        name: 'What to Watch',
        value: 'whatToWatch',
      },
      {
        name: 'Latest Trailers',
        value: 'latestTrailers',
      },
      {
        name: 'IMDb Originals',
        value: 'imdbOriginals',
      },
      {
        name: 'IMDb Picks',
        value: 'imdbPicks',
      },
      {
        name: 'IMDb Podcasts',
        value: 'imdbPodcasts',
      },
    ],
  },
];

const awardsAndEventsConfig = [
  {
    type: 'Awards and Events',
    value: 'awardsAndEvents',
    icon: 'awardsIcon',
    data: [
      {
        name: 'Oscars',
        value: 'oscars',
      },
      {
        name: 'Emmys',
        value: 'emmys',
      },
      {
        name: 'Sundance Film Festival',
        value: 'sundance',
      },
      {
        name: 'Best of 2023',
        value: 'bestOf',
      },
      {
        name: 'STARmeter Awards',
        value: 'starMeterAwards',
      },
      {
        name: 'Awards Central',
        value: 'awardsCentral',
      },
      {
        name: 'Festival Central',
        value: 'festivalCentral',
      },
      {
        name: 'All Events',
        value: 'allEvents',
      },
    ],
  },
];

const celebsConfig = [
  {
    type: 'Celebs',
    value: 'celebs',
    icon: 'celebsIcon',
    data: [
      {
        name: 'Born Today',
        value: 'bornToday',
      },
      {
        name: 'Most Popular Celebs',
        value: 'mostPopularCelebs',
      },
      {
        name: 'Celebrity News',
        value: 'celebrityNews',
      },
    ],
  },
];

const communityConfig = [
  {
    type: 'Community',
    value: 'community',
    icon: 'communityIcon',
    data: [
      {
        name: 'Help Center',
        value: 'helpCenter',
      },
      {
        name: 'Contributor Zone',
        value: 'contributorZone',
      },
      {
        name: 'Polls',
        value: 'polls',
      },
    ],
  },
];

const sideDrawerConfig = [
  ...moviesConfig,
  ...tvConfig,
  ...watchConfig,
  ...awardsAndEventsConfig,
  ...celebsConfig,
  ...communityConfig,
];

const topDrawerConfig = [
  [...moviesConfig],
  [...tvConfig, ...watchConfig],
  [...awardsAndEventsConfig],
  [...celebsConfig],
  [],
  [...communityConfig],
];

export { sideDrawerConfig, topDrawerConfig };
