import { Link } from "react-router-dom";
import '../disney.css';

function disney() {
  return (
    <div>
      <header>
        <div className="header">
          <img src="./images/disney.png" alt="Netflix" className="disimg"></img>
        </div>
      </header>
      <section>
        <div className="text">
          <h1><span className='Dis'>Disney</span>에서 제공하는 영화 & 드라마</h1>
        </div>
        <table border="1">
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
        <div className="one">
          <div className="onehomebtn"><Link to="/"><button class="Onebtn">Home</button></Link></div>
        </div>
      </section>
    </div>
    
  );
}

export default disney;
