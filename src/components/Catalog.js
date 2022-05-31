import React from 'react'
import Card from './Card'
import Hemonga from '../img/Hemonga.jpg'
import Lucifer from '../img/Lucifer.jpg'
import brkCrw from '../img/brokenCrown.jpg'
import crossB from '../img/crossbones.jpg'
import elders from '../img/cuffoftheelders.jpg'
import boneB from '../img/boneBangle.jpg'
import Paimon from '../img/kingpaimon.jpg'
import Lamourex from '../img/Lamoureux.jpg'



function Catalog() {
return (
    <div className='cat_cont'>
        <Card
      img={Hemonga}
      name = 'Hemonga'
      price = '$646.00'
      />
        <Card
      img='https://cdn.shopify.com/s/files/1/0278/3585/9031/products/side_1x_61ea97e9-7513-49ad-b130-94f3d7643026_720x.jpg?v=1619975951'
      name = 'Lucifer'
      price = '$666.00'
      />
        <Card
      img={elders}
      name = 'Cuff of the Elders'
      price = '$685.00'
      />
      
      <Card
      img={Paimon}
      name = 'King Paimon Ring'
      price = '$867.64'
      />
      
      <Card
      img={brkCrw}
      name = 'The Broken Crown Pendant'
      price = '$1443.00'
      />
      
      <Card
      img={crossB}
      name = 'Skull&Crossbones Ring'
      price = '$433.00'
      />
      <Card
      img={boneB}
      name = 'Bone Bangle'
      price = '$698.00'
      />
      
      <Card
      img={Lamourex}
      name = 'L´Amoureux'
      price = '$680.00'
      />

      






<Card
      img={Hemonga}
      name = 'Hemonga'
      price = '$646.00'
      />
        <Card
      img={Lucifer}
      name = 'Lucifer'
      price = '$666.00'
      />
        <Card
      img={elders}
      name = 'Cuff of the Elders'
      price = '$685.00'
      />
      
      <Card
      img={Paimon}
      name = 'King Paimon Ring'
      price = '$867.64'
      />
      
      <Card
      img={brkCrw}
      name = 'The Broken Crown Pendant'
      price = '$1443.00'
      />
      
      <Card
      img={crossB}
      name = 'Skull&Crossbones Ring'
      price = '$433.00'
      />
      <Card
      img={boneB}
      name = 'Bone Bangle'
      price = '$698.00'
      />
      
      <Card
      img={Lamourex}
      name = 'L´Amoureux'
      price = '$680.00'
      />

    </div>
  )
}

export default Catalog