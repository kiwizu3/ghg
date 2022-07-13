import './banner.scss';

function Banner() {

  return (
    <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
    <img className="mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nepal_road_sign_A25.svg/900px-Nepal_road_sign_A25.svg.png" alt="" width="48" height="48"/>
    <div className="lh-100">
      <h6 className="mb-0 text-white lh-100">දූශිත දේශපාලනයට එරෙහි සාමකමී ජනතා අරගලය</h6>
      <small>Enough is Enough</small>
    </div>
  </div> 
  );
}

export default Banner;
