import { Link } from "react-router-dom";
import '../Netflix.css';

function Netflix() {
  return (
    <div>
      <header>
        <div className="head">
          <img src="./images/Netflix.png" alt="Netflix" className="Netimg"></img>
        </div>
      </header>
      <section>
        <div className="subject">
          <h1><span className='Net'>Netflix</span>에서 제공하는 영화 & 드라마</h1>
        </div>
        <table border="1">
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      <div className="home">
          <div className="Homebtn"><Link to="/"><button class="homebtn">Home</button></Link></div>
        </div>
      </section>
    </div>
    
  );
}

export default Netflix;
