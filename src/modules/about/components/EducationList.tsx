import { TbSchool as EducationIcon } from 'react-icons/tb';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { EducationProps } from '@/common/types/education';

import EducationCard from './EducationCard';

const EducationList = ({
  educationList,
}: {
  educationList: EducationProps[];
}) => {
  return (
    <section className='space-y-6'>
      <div className='space-y-2'>
        <SectionHeading
          title='教育'
          icon={<EducationIcon size={22} className='mr-1' />}
        />
        <SectionSubHeading>
          <p className='dark:text-neutral-400'>我的母校</p>
        </SectionSubHeading>
      </div>

      <div className='grid md:grid-cols-1 gap-4'>
        {educationList?.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default EducationList;
