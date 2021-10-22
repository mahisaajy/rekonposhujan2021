import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  lastGrid: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '40%',
    },
  },
}));

const Customization = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        label="Inovasi"
        title="Aplikasi Android ePHK"
        subtitle="Aplikasi ePHK (Pos Hujan Kerjasama) BMKG adalah aplikasi yang ditujukan untuk mendukung operasional pengamatan dan pencatatan data curah hujan pos hujan kerjasama."
        align="center"
        ctaGroup={[
          // <Button variant="contained" color="primary" size="large">
          //   Start now
          // </Button>,
          // <Button variant="outlined" color="primary" size="large">
          //   Learn more
          // </Button>,
          <a href="https://play.google.com/store/apps/details?id=id.bmkg.poshujan" target="_blank" title="thefront">
            <Image
              // className={classes.logoImage}
              src="/images/logos/google-play.png"
              alt="thefront"
              lazy={false}
            />
          </a>
        ]}
      />
      <Grid container spacing={isMd ? 8 : 2}>
        <Grid item sm={1}>
          <Grid container justif="center" alignItems="center">            
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Grid container justif="center" alignItems="center">
            <Image
              src="/images/illustrations/ephk1.jpg"
              alt="TheFront Company"
              className={classes.image}
              data-aos="fade-up"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Grid
            container
            justif="center"
            alignItems="center"
            className={classes.lastGrid}
          >
            <Image
              src="/images/illustrations/ephk2.jpg"
              alt="TheFront Company"
              className={classes.image}
              data-aos="fade-up"
            />
          </Grid>
        </Grid>
        <Grid item sm={1}>
          <Grid container justif="center" alignItems="center">            
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Customization.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Customization;
