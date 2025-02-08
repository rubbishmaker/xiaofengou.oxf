import Link from 'next/link';
import { BiRocket as RocketIcon } from 'react-icons/bi';
import Button from '@/common/components/elements/Button';
import Card from '@/common/components/elements/Card';

const Services = () => {
  return (
    <section className='space-y-5'>
      <Card className='p-8 bg-neutral-100 border dark:border-none rounded-xl space-y-4'>
        <Link href='/contact' className='inline-block'>
          <Button data-umami-event='Click Contact Button'>联系我</Button>
        </Link>
      </Card>
    </section>
  );
};

export default Services;
