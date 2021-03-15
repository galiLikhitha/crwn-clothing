import React from 'react';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';
const Header = (currentUser) =>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />

        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                (<div className='option' onClick={() =>auth.signOut()}>SIGN OUT</div>)
                :
                (<link className='option' to='/signin'> Sign In</link>)
            }
            <CartIcon />
        </div>
        <CartDropdown />

    </div>

);
const mapStateToProps = state =>({
    currentUser : state.user.currentUser

})

export default connect(mapStateToProps)(Header);