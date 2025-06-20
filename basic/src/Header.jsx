import './Header.css';
function Header(){
const num1 = 5;
    const num2 = 3;
    const greeting = '안녕하세요';
    const program = '리액트';
    const isLogin = false;
    return(
        <header>
            <h1 style={{backgroundColor:'yellow', color:'blue'}}>logo</h1>
            <p style={{backgroundColor:'aqua', color:'violet'}}>숫자 {num1}에서 {num2}을 뺀 결과 {num1-num2}</p>
            <p style={{}}>{greeting}, {program} 출력결과 {greeting+program}</p>
            <p>{isLogin ? '로그인 성공' : '로그인 필요'}</p>
        </header>
    )
}
export default Header;