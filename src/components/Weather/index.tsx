import * as React from 'react';
import { connect } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import { WeatherState } from '../../types/states';
import WeatherTable from '../WeatherTable';
import Loading from '../Loading';

import './Weather.css';
import WeatherInfo from '../WeatherInfo';
import WelcomeCard from '../WelcomeCard';

type Props = WeatherState;

const notifyError = (error:any) => toast.error(error);


export const Weather: React.FC<Props> = ({
  data,
  error,
  loading,
}) => (
  <div className='Weather'>
    <Toaster/>
    { !data && (
      <WelcomeCard/>
    )}
    { data && (
      <WeatherTable data={data} />
    )}
    { data && (
      <WeatherInfo data={data} />
    )}
    { error && (
      notifyError(error)
    )}
    { loading && (
      <Loading />
    )}
  </div>
);

const mapStateToProps = (state: WeatherState) => ({
  ...state,
});

export default connect(
  mapStateToProps,
  null,
)(Weather);
