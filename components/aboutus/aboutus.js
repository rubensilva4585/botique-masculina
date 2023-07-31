import '../../styles/aboutus.css'

export function createAboutUs(){
    const divContainerAboutUs = document.createElement('div')
    divContainerAboutUs.classList.add('aboutus')

    divContainerAboutUs.innerHTML = `
    <div class="container">
      <div class="div-title">
        <h2>About Us</h2>
        <p>Driven by Passion, Defined by Quality</p>
      </div>
      <div class="mission-vision-history">
        <div class="mvh img-left">
          <div class="mvh-image">
            <img src="https://images.unsplash.com/photo-1602972585840-3f45671765d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="">
          </div>
          <div class="mvh-body">
            <h3>Mission</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              voluptatum, quibusdam, quia, quae voluptate voluptas
              exercitationem quos doloribus quod voluptatibus quas
              reprehenderit. Quisquam, voluptatum. Quisquam, voluptatum.
              Quisquam, voluptatum.
            </p>
          </div>
        </div>
        <div class="mvh img-right">
          <div class="mvh-body">
            <h3>Vision</h3>
            <p>
              Lorem ipsum, dolor sit amet co nemo at! Voluptas optio quidem, a voluptatum adipisci dolor, at officiis eveniet et hic laboriosam quis obcaecati. Accusamus alias aliquam sequi voluptatum ea magni tempora excepturi sunt quibusdam, autem, itaque aperiam harum porro, facilis inventore enim expedita nemo a!
            </p>
          </div>
          <div class="mvh-image">
            <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="">
          </div>
        </div>
        <div class="mvh img-left">
          <div class="mvh-image">
            <img src="https://images.unsplash.com/photo-1617330527074-fe659f90e7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80" alt="">
          </div>
          <div class="mvh-body">
            <h3>History</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur obcaecati minima mollitia. Atque corrupti dolor quibusdam. Sunt quibusdam eius maxime, natus laudantium autem? Libero, optio aliquid exercitationem et eligendi blanditiis facilis maxime amet ducimus omnis! Inventore numquam deserunt in sunt officia.
            </p>
          </div>            
        </div>
      </div>
    </div>`

    return divContainerAboutUs
}