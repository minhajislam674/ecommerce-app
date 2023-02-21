import {Outlet, Link} from 'react-router-dom'
import { Fragment, useContext } from 'react';
import { signOutUser } from '../../util/firebase/firebase.util';
import { UserContext } from '../../contexts/user.context';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss';

//Navigation here is the top level component. The Outlet inside represents nested components that should be displayed on the exact path. e.g. Home component.
const Navigation = () => {
    const { currentUser } = useContext(UserContext);




    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='LOGO' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {
                    currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                    ) : (      
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                )}
            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;