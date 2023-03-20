import Profile from "../assets/profile.jpg";


const SectionFour = () => {
  return (
    <div className="s3">
        <div className="text-center">
            <h4>Testimonials</h4>
            <h1>What they are saying</h1>
            <p className="text-center-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tincidunt metus, sit amet tristique mauris rhoncus eget. Nulla facilisi. Nulla facilisi. Donec non faucibus libero. Cras vel quam ante. Nam at est euismod, cursus risus eget, aliquam augue. Suspendisse potenti. Proin feugiat felis sed bibendum feugiat.</p>
        </div>
        <div className="box-wrap">
            <div className="card-box" id="wide-box">
                <ol className="box-content">
                    <li> <img src={Profile} alt="profile image" className="profile"/></li>
                    <li>Lorem </li>
                    <li>Stars Rating</li>
                    <li>Name</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default SectionFour