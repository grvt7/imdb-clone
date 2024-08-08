import AwardsIcon from '@/icons/AwardsIcon';
import Celebs from '@/icons/Celebs';
import CommunityIcon from '@/icons/CommunityIcon';
import Companies from '@/icons/Companies';
import Keywords from '@/icons/Keywords';
import Search from '@/icons/SearchIcon';
import Television from '@/icons/Television';
import Titles from '@/icons/Titles';
import WatchOnlineIcon from '@/icons/WatchOnlineIcon';

export const getIcons = (icon: string) => {
  switch (icon) {
    case 'searchIcon':
      return <Search />;
    case 'moviesIcon':
      return <Titles />;
    case 'televisionIcon':
      return <Television />;
    case 'celebsIcon':
      return <Celebs />;
    case 'companiesIcon':
      return <Companies />;
    case 'keywordsIcon':
      return <Keywords />;
    case 'awardsIcon':
      return <AwardsIcon />;
    case 'watchOnlineIcon':
      return <WatchOnlineIcon />;
    case 'communityIcon':
      return <CommunityIcon />;
    default:
      return '';
  }
};
