import Breakline from '@/common/components/elements/Breakline';
import { BlogItemProps } from '@/common/types/blog';

import BlogPreview from './BlogPreview';
import Introduction from './Introduction';
import Services from './Services';

const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='mt-8 mb-7' />
      <Services />
    </>
  );
};

export default Home;
