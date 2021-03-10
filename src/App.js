import './App.css';
import Products from './component/Products';
function App() {
  const data=[
    {
      id :1,
      img:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-green-select-2019_2_1_2_2.png",
      title:"Serenity cruise",
      description:" Cảng khởi hành: Tuần Châu",
      cost: 399.000
    },
    {
      id :2,
      img:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-green-select-2019_2_1_2_2.png",
      title:"Serenity cruise",
      description:" Cảng khởi hành: Tuần Châu",
      cost: 399.000
    },
    {
      id :3,
      img:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-green-select-2019_2_1_2_2.png",
      title:"Serenity cruise",
      description:" Cảng khởi hành: Tuần Châu",
      cost: 399.000
    }
  ];
  var aray=data.map((e,index) => {
     return <div key={e.id} className="col-lg-4">
                        <img src={e.img}></img>
                        <h3>{e.title}</h3>
                         <div className="description-wrap">
                            <p>{e.description}</p>
                            <p>{e.description}</p>
                            <p>{e.description}</p>
                            <p>{e.description}</p>
                          </div>
                          <div className="cost">
                            <span>{e.cost}</span>
                          </div>
                          <button>Đặt tàu</button>
                    </div>

  });
  return (
   <div>
     <div className="container">
           <div className="row">
                     < Products
                     
                     >{aray}</Products>
             </div>
           </div>
 
   </div>
 
    
  );
}

export default App;
