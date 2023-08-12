import React, { useContext, useState } from 'react'
import AddRoomForm from '../../../components/Forms/AddRoomForm'
import { imageUpload } from '../../../api/utils';
import { AuthContext } from '../../../providers/AuthProvider';

const AddRoom = () => {
    const {user} = useContext(AuthContext)
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const [loading,setLoading]= useState(false);
    const [upLoadButtonText, setUpLoadButtonText] = useState("Upload Image");

    // handl form submit
    const handleSubmit=(event)=>{
        event.preventDefault();
        setLoading(true)
        const location = event.target.location.value;
        const title = event.target.title.value;
        // const from = dates.startDate
        // const to = dates.endDate;
        const price= event.target.price.value;
        const total_guest= event.target.total_guest.value;
        const bedrooms= event.target.bedrooms.value;
        const bathrooms= event.target.bathrooms.value;
        const description= event.target.description.value;
        const category= event.target.category.value;
        const image = event.target.image.files[0];
        // upload image to imgbb
        imageUpload(image)
        .then(data=>{
            const roomData = {
                title,
                location,
                bedrooms,
                bathrooms,
                category,
                total_guest,
                description,
                price:parseFloat(price),
                image: data.data.display_url,
                host:{
                    name: user ?.displayName,
                    image: user ?.photoURL,
                    email: user ?.email,
                }
            }
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err.message)
            setLoading(false)
        })
    }

    const handleImageChange=(image)=>{
        setUpLoadButtonText(image.name)
    }

    const handleDates=(ranges)=>{
        console.log(ranges.selection)
        setDates(ranges.selection)
    }

  return (
    <div>
        <AddRoomForm 
            handleSubmit={handleSubmit} 
            loading={loading} 
            handleImageChange={handleImageChange}
            upLoadButtonText={upLoadButtonText}
            dates={dates}
            handleDates={handleDates}
        />
    </div>
  )
}

export default AddRoom