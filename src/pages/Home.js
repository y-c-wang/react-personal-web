import HomeStyle from './Home.module.scss';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import avatar from '../avatar.svg';

function Home() {
  return (
    <motion.div
      className={HomeStyle.Home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={HomeStyle.container}>
        <img src={avatar} className={HomeStyle.avatar} alt='avatar' />
        <p>
          Hi,
          <br />
          I am [name],
          <br />
          A [job name] in [company]
        </p>
      </div>
    </motion.div>
  );
}

export default Home;