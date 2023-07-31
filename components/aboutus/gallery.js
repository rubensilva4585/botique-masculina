import '../../styles/aboutus.css'

export function createGalleryGrid(){
    const divContainerGallery = document.createElement('div')
    divContainerGallery.classList.add('container')

    divContainerGallery.innerHTML = `<div class="container">
        <div class="div-title">
          <h2>Our Gallery</h2>
          <p>The Essence of Elegance</p>
        </div>
        <div class="grid-container">
          <div class="grid-ai-size grid-allitems grid-item1">
            <img
              class="images"
              src="https://img.freepik.com/fotos-gratis/jovem-escolhendo-panos-na-loja-de-moda-masculina_1303-30814.jpg"
              alt="image1"
            />
          </div>
          <div class="grid-ai-size grid-allitems grid-item2">
            <img
              class="images"
              src="https://casaeconstrucao.org/wp-content/uploads/2020/01/LOJAS6.jpg"
              alt="image2"
            />
          </div>
          <div class="grid-ai-size grid-allitems grid-item3">
            <img
              class="images"
              src="https://3.bp.blogspot.com/-JXIq5Thyqkw/W6wnl8f0oKI/AAAAAAAAMlc/M58B6__6aFwo4HUrgqVas2w8lD_Zp1cZACLcBGAs/s1600/comprar-plus-size-masculino.jpeg"
              alt="image3"
            />
          </div>
          <div class="grid-ai-size grid-allitems grid-item4">
            <img
              class="images"
              src="https://img.freepik.com/fotos-premium/acessorios-masculinos-classicos-na-mesa-marrom_160204-1765.jpg?w=2000"
              alt="image4"
            />
          </div>
          <div class="grid-ai-size grid-allitems grid-item5">
            <img
              class="images"
              src="https://img.freepik.com/fotos-gratis/jovem-escolhendo-panos-na-loja-de-moda-masculina_1303-31001.jpg?w=360"
              alt="image5"
            />
          </div>
          <div class="grid-ai-size grid-allitems grid-item6">
            <img
              class="images"
              src="https://img.freepik.com/fotos-gratis/jovem-bonito-escolhendo-sapatos-em-uma-loja_1303-19707.jpg?w=360"
              alt="image6"
            />
          </div>
          <div class="grid-ai-size grid-allitems grid-item7">
            <img
              class="images"
              src="https://i0.wp.com/www.canalmasculino.com.br/wp-content/uploads/2016/04/acessorios-masculinos-carteiras-oculos-relogios-cintos-570x380.jpg?resize=570%2C380"
              alt="image7"
            />
          </div>
          <div class="grid-allitems grid-item8">
            <img
              class="images"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCzoJiCFP3Eqzan6XJSsmWfEolAq73RQwSA&usqp=CAU"
              alt="image8"
            />
          </div>
        </div>
      </div>`

    return divContainerGallery
}