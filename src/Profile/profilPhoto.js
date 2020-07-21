import React  from 'react';
import personne from '../op.jpg'
const profilPhoto = () => {
    console.log(personne)
return (
    <div>
<img src={personne}  alt="profile" /> 

    </div>

)
    }


export default profilPhoto;