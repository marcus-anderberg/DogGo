import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

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
                <Button onClick={this.props.submit} color="primary" variant="contained" size="medium" className={classes.button}>
                    <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                    Save
                </Button>
            </div>
        );
    }
}

const mapReduxToProps = (reduxState) => {
    return reduxState;
};

export default withStyles(styles)(connect(mapReduxToProps)(Submit));