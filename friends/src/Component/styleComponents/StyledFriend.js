import styled from 'styled-components';


const StyledFriend = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2% 0%;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    .update-and-delete {
        width: 100%;
        right: 37.5%;
        top: 7%;
        display: flex;
        justify-content: center;
        button{
            background: #0C0032;
            border: none;
            margin: 1%;
            color: white;
            padding: 2%;
        }
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
            width: 80%;
            margin: 2% 0%;
            padding: 2% 0%;
            font-size: 16px;
        }
        button{
            margin: 2% 0%;
            padding: 2.5% 0%;
            width: 60%;
        }
    }
`

export default StyledFriend;