interface SearchDropDownItem {
  name: string;
  icon: string;
  value: string;
}

export const searchDropDown: SearchDropDownItem[] = [
  {
    name: 'All',
    icon: 'GoSearch',
    value: 'all',
  },
  {
    name: 'Titles',
    icon: 'MdLocalMovies',
    value: 'titles',
  },
  {
    name: 'Episodes',
    icon: 'PiTelevision',
    value: 'episodes',
  },
  {
    name: 'Celebs',
    icon: 'Celebs',
    value: 'celebs',
  },
  {
    name: 'Companies',
    icon: 'Companies',
    value: 'companies',
  },
  {
    name: 'Keywords',
    icon: 'Keywords',
    value: 'keywords',
  },
];
