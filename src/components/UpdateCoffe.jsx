import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffe = () => {
    const updateCoffe= useLoaderData()
    const {_id,name,quantity,supplier,category,details,taste,photo} =updateCoffe
    
    const handleUpdate = (e)=>{
        console.log(updateCoffe)
        e.preventDefault()
       const form= e.target
       const name = form.name.value
       const quantity = form.quantity.value
       const supplier = form.supplier.value
       const  category = form.category.value
       const details = form.details.value
       const taste = form.taste.value
       const photo = form.photo.value

       const updateItem = {name,quantity,supplier,category,details,taste,photo}
       
       fetch(`https://coffe-store-server-31nvpvsvh-joy-mahmuds-projects-22f2ffa2.vercel.app/coffe/${_id}`,{
        method:"PUT",
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(updateItem)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        
        if(data.modifiedCount>0){
            Swal.fire({
                title: 'success.',
                text: 'Updated the item successfully',
                icon: 'success',
                confirmButtonText: 'ok'
              })
        }
       })

    }
    return (
        <div className="container mx-auto space-y-2">
            <h3 className="text-3xl font-semibold mb-5">Add coffe</h3>
            <form className="space-y-2" onSubmit={handleUpdate}>
                <div className="flex gap-5 items-center">
                    <input type="text" name="name" defaultValue={name} placeholder="Coffe name" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="quantity" defaultValue={quantity} placeholder="Available quantity" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="flex gap-5 items-center">
                    <input type="text" name="supplier" defaultValue={supplier} placeholder="supplier" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="category" defaultValue={category} placeholder="category" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="flex gap-5 items-center">
                    <input type="text" name="details" defaultValue={details} placeholder="details" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="taste" defaultValue={taste} placeholder="taste" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="flex gap-5 items-center">
                    <input type="text" name="photo" defaultValue={photo} placeholder="photo" className="input input-bordered w-full max-w-xs" />
                </div>
                <input className="btn-primary btn w-1/2 mt-2" type="submit" value="Update" />
            </form>

        </div>
    );
};

export default UpdateCoffe;