import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const useStyles = makeStyles(theme => ({
    root: {
      background: theme.palette.alternate.main,
      // borderBottomRightRadius: '50%',
      // borderBottom: `1px solid ${colors.grey[200]}`,
    },
    table: {
      // minWidth: 650,
    },
    container: {
      padding: theme.spacing(4),
    }
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rowsDay1 = [
    // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('', 'Pembukaan Kegiatan Rekonsiliasi Metadata Pos Hujan Kerjasama', ''),    
    createData('08.30 - 08.50', 'Peserta akses dan berada di Lobby Zoom', 'Panitia'),
    createData('08.50 - 09.00', 'Pembacaan Tata Tertib Pelaksanaan', 'Panitia'),
    createData('09.00 - 09.10', 'Laporan Ketua Panitia', 'Aminullah'),
    createData('09.10 - 09.20', 'Sambutan sekaligus Pembukaan Acara', 'Kepala Pusat Database'),
    createData('09.30 - 09.50', 'Data Hujan sebagai Dukungan Produk Iklim', 'Pusat Informasi Perubahan Iklim'),
    createData('09.50 - 10.00', 'Pembacaan Doa + Foto bersama', 'Panitia'),    
    createData('10.00 - 10.30', 'Break', ''),
    createData('10.30 - 10.40', 'Persiapan Pembagian Breakout Room', 'Panitia'),
    createData('10.40 - 12.00', 'Mapping Metadata antara UPT dan Pusat (PDB dan KPP)', ''),
    createData('', '- Group 1', 'Ayu Bima'),
    createData('', '- Group 2', 'Mahisa Ajy & Sitti B'),
    createData('', '- Group 3', 'Feizal & Zulkarnain'),
    createData('', '- Group 4', 'Zakariya & Antiq'),
    createData('', '- Group 5', 'Setyo & Rahmat'),
    createData('', '- Group 6', 'Indah & Flo'),
    createData('', '- Group 7', 'Reza Tisa & Join'),
    createData('', '- Group 8', 'Putri & Hesti'),
    createData('', '- Group 9', 'Hanapi & Irda'),
    createData('', '- Group 10', 'Nurhayati Rahayu & Heru'),    
    createData('12.00 - 13.00', 'Ishoma', 'Panitia'),
    createData('13.00 - 15.00', 'Mapping Metadata antara UPT dan Pusat', 'Tim'),
    createData('15.00', 'Hari ke-1 Selesai'),
  ];
  
  const rowsDay2 = [
    createData('08.30 - 10.00', 'Mapping Metadata antara UPT dan Pusat', 'Tim'),
    createData('10.00 - 10.30', 'Break', ''),
    createData('10.30 - 12.00', 'Mapping Metadata antara UPT dan Pusat', 'Tim'),
    createData('12.00 - 13.00', 'Ishoma', ''),
    createData('13.00 - 13.30', 'Kompilasi Hasil Mapping Metadata Pos Hujan Kerjasama', 'Tim'),
    createData('13.30 - 13.45', 'Penutupan Kegiatan Rekonsiliasi Metadata Pos Hujan Kerjasama dan Pembacaan Hasil Rekon', 'PDB, KPP'),
    createData('13.45', 'Acara Selesai', ''),    
  ];
  
  

const Event = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      

      <Container className={classes.container} maxWidth="sm" disableGutters>
        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          Agenda Rekonsiliasi
        </Typography>
      </Container>

      <Container className={classes.container} maxWidth='md'>
        <Typography variant="h6" paragraph>Hari 1: Rabu, 27 Oktober 2021</Typography>
        <TableContainer component={Paper}>
          <Table stickyHeader className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Waktu (WIB)</TableCell>
                <TableCell align="left">Kegiatan</TableCell>
                <TableCell align="left">PIC/Narasumber</TableCell>
                {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <TableRow>
                <TableCell />
                <TableCell align="left">Selasa, 21 September 2021</TableCell>
                <TableCell />
              </TableRow> */}
              {rowsDay1.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  {/* <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}



            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Container className={classes.container} maxWidth='md'>
        <Typography variant="h6" paragraph>Hari 2: Kamis, 28 Oktober 2021</Typography>
        <TableContainer component={Paper}>
          <Table stickyHeader className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Waktu (WIB)</TableCell>
                <TableCell align="left">Kegiatan</TableCell>
                <TableCell align="left">PIC/Narasumber</TableCell>
                {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
        <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>

              {/* <TableRow>
                <TableCell />
                <TableCell align="left">Rabu, 12 Agustus 2020</TableCell>
                <TableCell />
              </TableRow> */}
              {rowsDay2.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  {/* <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}



            </TableBody>
          </Table>
        </TableContainer>
      </Container>      


    </div>
  );
};

export default Event;
