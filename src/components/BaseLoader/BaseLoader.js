import React, { useRef, useEffect } from 'react';

import { CSSTransition } from 'react-transition-group';
import { showBaseLoader, hiddenBaseLoader } from './timeline/BaseLoaderTl';

import styles from './BaseLoader.module.scss';

export const BaseLoader = ({ isShow }) => {
	const refBlock = useRef();
	useEffect(() => showBaseLoader(refBlock.current), []);

  return (
    <CSSTransition
      in={isShow}
      timeout={1700}
      unmountOnExit
      onExit={node => hiddenBaseLoader(node)}
    >
      <div className={styles.block} ref={refBlock}>
				<div className={styles.line} data-animation='line'/>
        <div className={styles.text}>
          <span className={styles.title}>
            <span className={styles.titleText} data-animation='title'>
              Hello
            </span>
          </span>
          <span className={styles.subtitle}>
            <span className={styles.subtitleText} data-animation='subtitle'>
              My name is Alexey Lapunov
            </span>
          </span>
        </div>
      </div>
    </CSSTransition>
  );
};
