import Sunset from "../assets/sunset.jpg";


const SectionTwo = () => {
  return (
    <div className='main-box'>
      <div className="text-box">
      <h1>Section Two: More Food Options To Go In This Area</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tincidunt metus, sit amet tristique mauris rhoncus eget. Nulla facilisi. Nulla facilisi. Donec non faucibus libero. Cras vel quam ante. Nam at est euismod, cursus risus eget, aliquam augue. Suspendisse potenti. Proin feugiat felis sed bibendum feugiat.</p>
      <button>Order Now</button>
      </div>

      <div>
        <img src={Sunset} alt="sunset image" className="sunset"/>
      </div>

    </div>
  )
}

export default SectionTwo