import React from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';

const Navbar = () => {
    const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','SALE','지속가능성']
    const navigate = useNavigate()
    const goToLogin = ()=>{
        navigate("/login");
    }
    const goToHome = ()=>{
        navigate("/");
    }
    const search = (event)=>{

        if(event.key === "Enter"){
            let keyword = event.target.value;
            console.log(keyword);

            navigate(`/?q=${keyword}`);
        }
    }
  return (
    <Container>
        <div className='nav-wrap'>
            <div className="nav-top" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
            <div className="nav-logo" onClick={goToHome}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt=""/>
            </div>
            <div className="nav-box">
                <ul className="nav-menu">
                    {menuList.map(menu=>
                        <li>{menu}</li>
                    )}
                </ul>
                <div className="nav-srch form-outter" tabindex="0">
                    <input type="text" 
                           placeholder="Please enter a keyword" 
                           className='form-default'
                           onKeyPress={(event)=>search(event)}/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Navbar
