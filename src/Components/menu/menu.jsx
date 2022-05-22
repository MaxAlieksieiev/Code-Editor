import { useState } from 'react';
import { Menu as MuiMenu, Button, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

export const Menu = ({ title, arrayOfFunctionality, callbackFunction }) => {
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItem = (item) => {
        callbackFunction(title, item);
        handleClose();
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                    textTransform: 'capitalize',
                    color: 'white',
                    backgroundColor: 'grey',
                }}
            >
                {title}
            </Button>
            <MuiMenu
                id="basic-menu"
                open={open}
                onClose={handleClose}
                anchorEl={anchorEl}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {
                    arrayOfFunctionality.map((item) => (
                        <MenuItem onClick={() => handleMenuItem(item)} key={item.id}>{item.title}</MenuItem>
                    ))
                }
            </MuiMenu>
        </div>
    );
};

Menu.defaultProps = {
    callbackFunction: () => {},
};

Menu.propTypes = {
    title: PropTypes.string.isRequired,
    arrayOfFunctionality: PropTypes.array.isRequired,
    callbackFunction: PropTypes.func,
};
