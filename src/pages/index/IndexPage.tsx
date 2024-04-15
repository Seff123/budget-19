import {Header} from "../../components/Header.tsx";
import {Footer} from "../../components/Footer.tsx";

import "./IndexPage.scss"
import {Link} from "react-router-dom";

interface Props {
    user?: string
}

function IndexPage({ user }: Props) {
  return (
      <>
      <Header user={user}/>
      <div className="row vw-100" style={{height: "92vh"}}>
          <div className="col-6 p-0 d-flex justify-content-center align-items-center border-end">
              <div className="text-center">
                  <h1 className="fw-bold" style={{fontSize: "80px"}}>Budget-19</h1>
                  <p className="text-muted">Budgeting. Made difficult.</p>
              </div>
          </div>
          <div className="col-6 p-0 d-flex justify-content-center align-items-center">
              <div className="text-center">
                  <h1 className="pb-4" style={{fontSize: "60px"}}>Login</h1>
                  <div className="row">
                      <div className="col p-2">
                          <Link to="/login-page"><button type="button" className="google-sign-in-button" style={{width: "30px", height: "30px"}}></button></Link>
                      </div>
                      <div className="col p-2">
                      <button className="btn btn-primary">O</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
          <Footer/>
      </>
  )
}

export default IndexPage
