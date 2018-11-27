import React from 'react';
// material ui core components
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
// material ui icons
import DeleteIcon from '@material-ui/icons/Delete';
import WarningIcon from '@material-ui/icons/Warning';
import DoneIcon from '@material-ui/icons/Done';

class UserArrivalsTable extends React.Component {

  render(){

    const { arrivals, handleDelete } = this.props;
    return(
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Br.</TableCell>
          <TableCell>Korisnik</TableCell>
          <TableCell>Usluga</TableCell>
          <TableCell>Dolazak</TableCell>
          <TableCell>Plaćeno</TableCell>
          <TableCell>Obriši</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {arrivals.map((arrival, index, array) => {
        return(
          <TableRow key={arrival.id}>
            <TableCell>{array.length-index}</TableCell>
            <TableCell>{arrival.user}</TableCell>
            <TableCell>{arrival.service + ' (' + arrival.category + ')'}</TableCell>
            <TableCell>{arrival.arrival_time}</TableCell>
            <TableCell>{(!arrival.paid)?<WarningIcon/>:<DoneIcon/>}</TableCell>
            <TableCell>
              <IconButton name="arrival" id={arrival.id} onClick={handleDelete}>
                <DeleteIcon/>
              </IconButton>
            </TableCell>
          </TableRow>
        );
      })}
      </TableBody>
    </Table>
    )
  }
}

export default UserArrivalsTable;
