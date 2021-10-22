import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { LearnMoreLink, Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import { CountUpNumber } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  logo: {
    maxWidth: 50,
  },

  placementGrid: {
    display: 'flex',
    marginTop: 10,
  },
  placementGridItemMiddle: {
    margin: `0 ${theme.spacing(3)}px`,
  },
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={12} data-aos="fade-up">
          <SectionHeader
            title="Tema: One Data One Metadata"
            subtitle="Tujuan dari kegiatan ini adalah untuk menyeragamkan metadata dan data antara di UPT dengan yang ada di Pusat."
            align="left"
            label="Tentang"
            // ctaGroup={[
            //   <LearnMoreLink
            //     title="See all integrations"
            //     href="#"
            //     variant="h6"
            //   />,
            // ]}
            disableGutter
          />
          
          <div className={classes.placementGrid}>
            <div>
              <CountUpNumber
                end={68}
                label="Peserta Rekon"
                textColor="primary"
                // suffix="+"
              />
            </div>
            <div className={classes.placementGridItemMiddle}>
              <CountUpNumber
                end={34}
                label="Stasiun Koordinator"
                textColor="primary"
                // suffix="%"
              />
            </div>
            <div>
              <CountUpNumber
                end={34}
                label="Provinsi"
                textColor="primary"
              />
            </div>
          </div>
        </Grid>
        
                
          
        
            
        {/* <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item xs={4} key={index}>
                <CardBase withShadow liftUp>
                  <Image
                    src={item.logo}
                    alt={item.name}
                    className={classes.logo}
                    lazy={false}
                  />
                </CardBase>
              </Grid>
            ))}
          </Grid>
        </Grid> */}

      </Grid>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
