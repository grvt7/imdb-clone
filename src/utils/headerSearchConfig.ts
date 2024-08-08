interface SearchDropDownItem {
  name: string;
  icon: string;
  value: string;
}

export const searchDropDown: SearchDropDownItem[] = [
  {
    name: 'All',
    icon: 'searchIcon',
    value: 'all',
  },
  {
    name: 'Titles',
    icon: 'moviesIcon',
    value: 'titles',
  },
  {
    name: 'TV Episodes',
    icon: 'televisionIcon',
    value: 'episodes',
  },
  {
    name: 'Celebs',
    icon: 'celebsIcon',
    value: 'celebs',
  },
  {
    name: 'Companies',
    icon: 'companiesIcon',
    value: 'companies',
  },
  {
    name: 'Keywords',
    icon: 'keywordsIcon',
    value: 'keywords',
  },
];
