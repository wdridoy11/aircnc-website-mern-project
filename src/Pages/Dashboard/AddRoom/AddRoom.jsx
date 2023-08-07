import React, { useState } from 'react'
import AddRoomForm from '../../../components/Forms/AddRoomForm'

const AddRoom = () => {
    const [loading,setLoading]= useState(false);
    const [upLoadButtonText, setUpLoadButtonText] = useState("Upload Image")
    // handl form submit
    const handleSubmit=(event)=>{
        event.preventDefault();
        setLoading(true)
        const location = event.target.location.value;
        const title = event.target.title.value;
        const from = dates.startDate
        const to = dates.endDate;
        const price= event.target.price.value;
        const total_guest= event.target.total_guest.value;
        const bedrooms= event.target.bedrooms.value;
        const bathrooms= event.target.bathrooms.value;
        const description= event.target.description.value;
        const category= event.target.category.value;
        const image = event.target.image.files[0];
    }

    const handleImageChange=(image)=>{
        setUpLoadButtonText(image.name)
    }


  return (
    <div>
        <AddRoomForm 
            loading={loading} 
            handleSubmit={handleSubmit} 
            upLoadButtonText={upLoadButtonText}
            handleImageChange={handleImageChange}
        />
    </div>
  )
}

export default AddRoom