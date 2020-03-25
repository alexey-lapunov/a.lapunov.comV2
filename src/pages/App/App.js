import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setLoadingPage as acSetLoadingPage } from 'store/app/actions';

import { Home } from 'pages/Home';
import { BaseLoader } from 'components/BaseLoader';
import { CustomCursor } from 'components/CustomCursor';

import styles from './App.module.scss';

const App = ({ isLoadingPage, setLoadingPage }) => {
  useEffect(() => {
    setTimeout(() => setLoadingPage(false), 2000);
	});
	
  return (
    <div className={styles.block}>
      <BaseLoader isShow={isLoadingPage} />
			<CustomCursor/>
			<Home isShow={!isLoadingPage}/>
    </div>
  );
}

const mapStateToProps = state => ({ isLoadingPage: state.app.isLoadingPage });

const mapDispatchToProps = dispatch => ({
  setLoadingPage: value => dispatch(acSetLoadingPage(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
