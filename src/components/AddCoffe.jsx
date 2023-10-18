import Swal from 'sweetalert2'
const AddCoffe = () => {
    const handleAdd = (e)=>{
        e.preventDefault()
       const form= e.target
       const name = form.name.value
       const quantity = form.quantity.value
       const supplier = form.supplier.value
       const  category = form.category.value
       const details = form.details.value
       const taste = form.taste.value
       const photo = form.photo.value

       const newItem = {name,quantity,supplier,category,details,taste,photo}
       console.log(newItem)
       fetch('https://coffe-store-server-31nvpvsvh-joy-mahmuds-projects-22f2ffa2.vercel.app/coffe',{
        method:"POST",
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(newItem)
       })
       .then(res=>res.json())
       .then(data=>{
        
        if(data.insertedId){
            Swal.fire({
                title: 'success.',
                text: 'Inserted the item successfully',
                icon: 'success',
                confirmButtonText: 'ok'
              })
        }
       })

    }
    return (
        <div className="container mx-auto space-y-2">
            <h3 className="text-3xl font-semibold mb-5">Add coffe</h3>
            <form className="space-y-2" onSubmit={handleAdd}>
                <div className="flex gap-5 items-center">
                    <input type="text" name="name" placeholder="Coffe name" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="flex gap-5 items-center">
                    <input type="text" name="supplier" placeholder="supplier" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="category" placeholder="category" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="flex gap-5 items-center">
                    <input type="text" name="details" placeholder="details" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="taste" placeholder="taste" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="flex gap-5 items-center">
                    <input type="text" name="photo" placeholder="photo" className="input input-bordered w-full max-w-xs" />
                </div>
                <input className="btn-primary btn w-1/2 mt-2" type="submit" value="Add" />
            </form>

        </div>
    );
};

export default AddCoffe;