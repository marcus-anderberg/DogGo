import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Fab from '@material-ui/core/Fab';


const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
});

class Submit extends Component {



    render() {
        const { classes } = this.props;
        return (
            <div >
                <Fab onClick={this.props.submit} variant="extended" color="primary" className={classes.fab}>
                    <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                    Save
                </Fab>
            </div>
        );
    }
}

const mapReduxToProps = (reduxState) => {
    return reduxState;
};

export default withStyles(styles)(connect(mapReduxToProps)(Submit));