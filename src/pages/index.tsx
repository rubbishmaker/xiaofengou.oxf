import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import { BlogItemProps } from '@/common/types/blog';
import { siteMetadata } from '@/contents/siteMetadata';
import Home from '@/modules/home';

const HomePage: NextPage<{ blogList: BlogItemProps[] }> = ({ blogList }) => {
  return (
    <>
      <NextSeo title={`${siteMetadata.author} - Personal Website`} />
      <Container data-aos='fade-up'>
        <Home />
      </Container>
    </>
  );
};

export default HomePage;
