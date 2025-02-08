import { motion } from 'framer-motion';

const Status = () => {
  return (
    <div className='flex items-center gap-2'>
      <motion.div
        className='h-2 w-2 rounded-full bg-green-400'
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      <span>主题</span>
    </div>
  );
};

export default Status;
