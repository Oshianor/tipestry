import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import moment from "moment";
import { Lang } from '../../../lang';



const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 600,
	},
});

class History extends React.Component {
  state = {
    scroll: 'paper',
	};
	
	renderMoney(amount, type) {
		// console.log('amount', amount === 0);
		
		// if (amount !== 0 && String(amount).length < 3 && type === 'bitcoin') {
		// 	return amount / 10000
		// } else if (String(amount).length > 3) {
			return amount;
		// } else if (amount == 0) {
		// 	return 0.0000
		// } else {
		// 	return amount / 1000
		// }
	}

  render() {
		const { classes, open, handleClose, history } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          fullScreen
          onClose={() => handleClose()}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">
						{/* Tip's History */}
						{Lang.r2}
					</DialogTitle>
          <DialogContent>
            <Paper className={classes.root}>
							<Table className={classes.table}>
								<TableHead>
									<TableRow>
										<TableCell>
											{/* Discription */}
											{Lang.s2}
										</TableCell>
										<TableCell align="right">
											{/* Activity*/}
											{Lang.t2}
										</TableCell>
										<TableCell align="right">
											{/* Token */}
											{Lang.v2}
										</TableCell>
										<TableCell align="right">
											{/* Date */}
											{Lang.w2}
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{history.map(row => {
										return (
                      <TableRow key={row.id}>
                        <TableCell
                          component="th"
                          scope="row"
                        >
                          {typeof row.user[0].name !==
                          "undefined"
                            ? row.user[0].name
                            : row.user[0].username}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={
                            row.transactiontype ===
                            "received"
                              ? { color: "green" }
                              : row.transactiontype ===
                                "withdrawal"
                              ? { color: "orange" }
                              : { color: "red" }
                          }
                        >
                          {row.transactiontype ===
                          "received"
                            ? "Received"
                            : row.transactiontype ===
                              "withdrawal"
                            ? "Withdrawal"
                            : "Gifted"}
                        </TableCell>
                        <TableCell align="right">
                          {row.amount +
                            " " +
                            row.wallettype}
                        </TableCell>

                        <TableCell align="right">
                          {moment(row.created_at)
                            .locale(Lang.locale)
                            .format("lll")}
                        </TableCell>
                      </TableRow>
                    );
									})}
								</TableBody>
							</Table>
						</Paper>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} color="secondary">
							{/* Close */}
							{Lang.q2}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

History.propTypes = {
	classes: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(History);
