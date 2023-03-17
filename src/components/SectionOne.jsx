import Sunset from "../assets/sunset.jpg";


const SectionOne = () => {
  return (
    <div className='main-box'>
      <div>
        <img src={Sunset} alt="sunset image" className="sunset"/>
      </div>
      <div className="text-box">
      <h1>Section One: Someting about Food Goes Here</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tincidunt metus, sit amet tristique mauris rhoncus eget. Nulla facilisi. Nulla facilisi. Donec non faucibus libero. Cras vel quam ante. Nam at est euismod, cursus risus eget, aliquam augue. Suspendisse potenti. Proin feugiat felis sed bibendum feugiat.</p>
      <button>Order Now</button>
      </div>

    </div>
  )
}

export default SectionOne