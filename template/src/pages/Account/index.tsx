import React from 'react';
import { useDispatch, useSelector } from 'src/models/hook';
import styles from './index.module.less';

// interface IProps {}

const Account = () => {
  const dispatch = useDispatch();
  const countState = useSelector((state) => state.count.num);

  const loadingObj = useSelector(
    (rootState) => rootState.loading.effects.count.incrementAsync
  );

  console.log('loadingObj', loadingObj);

  return (
    <div className={styles.account}>
      Account
      <div className={styles.box}>
        countState:
        <br /> {countState}
        <br />
        <button
          onClick={() => {
            dispatch.count.increment(1);
          }}
        >
          点击触发dispatch同步
        </button>
        <button
          onClick={() => {
            dispatch.count.incrementAsync(2);
          }}
        >
          点击触发dispatch异步
        </button>
      </div>
    </div>
  );
};
export default React.memo(Account);
