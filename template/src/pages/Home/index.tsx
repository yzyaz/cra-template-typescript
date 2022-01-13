import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';

import styles from './index.module.less';

interface IProps {}
type TProps = RouteConfigComponentProps<IProps>;

const Home = (props: TProps) => {
  return (
    <>
      <div className={styles.home}>Home</div>
      {props.route && renderRoutes(props.route.routes)}
    </>
  );
};
export default React.memo(Home);
