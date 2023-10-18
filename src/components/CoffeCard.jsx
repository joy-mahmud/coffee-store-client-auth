import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeCard = ({ coffee,coffes,setCoffes}) => {
    const { _id,name, quantity, supplier, category, details, taste, photo } = coffee
    console.log(coffee)
    const handleDelete=(_id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             
            fetch(`https://coffe-store-server-31nvpvsvh-joy-mahmuds-projects-22f2ffa2.vercel.app/coffe/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then((data)=>{
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      const remaining = coffes.filter(item=>item._id!=_id)
                      setCoffes(remaining)
                      
                }
              
            })
            }
          })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{supplier}</p>
                    <p>{category}</p>
                    <p>{taste}</p>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical">
                            <button className="btn btn-primary">view</button>
                            <Link to={`/update/${_id}`}><button className="btn btn-secondary">Edit</button></Link>
                            <button onClick={()=>handleDelete(_id)} className="btn ">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;