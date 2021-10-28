import logo from './logo.svg';
import './App.css';
import Fruit from './Fruits';
import {ReactComponent as Bitmap} from './image/Bitmap.png';


const data = [
  {id:1, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=20&m=185262648&s=612x612&w=0&h=nxfd_QVNvUHjaZLq-p7jnF_TFm1N-vZTSy-wFyScoQg=', title:'Apple', Uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
  {id:2, img:'https://thumbs.dreamstime.com/z/apricot-fruits-isolated-green-leaf-white-background-clipping-path-86501139.jpg', title:'Apricot', Uom:'03', size:'01', unit:'$7.99', total:'$17.99'},
  {id:3, img:'https://media.istockphoto.com/photos/peeled-banana-on-white-background-photo-with-clipping-path-picture-id1154935375?k=20&m=1154935375&s=612x612&w=0&h=TALq0lrR1PI5XuGxqjUnss-tJBIUHuys1lCDbzSrPKU=', title:'Banana', Uom:'01', size:'03', unit:'$6.99', total:'$17.99'},
  {id:4, img:'https://www.alimentarium.org/sites/default/files/media/image/2017-01/alimentarium_kiwis_0.jpg', title:'Kiwi', Uom:'02', size:'04', unit:'$5.99', total:'$17.99'},
  {id:5, img:'https://img.freepik.com/free-photo/cucumber-vegetable-isolated-white-background_42033-135.jpg?size=626&ext=jpg', title:'Cucember', Uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
  {id:6, img:'https://image.shutterstock.com/image-photo/peach-isolate-slice-leaf-on-260nw-1550458292.jpg', title:'Peach', Uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
]

function App() {
  return (
    <div className="container">
        {
          data.map((value, index) =>{
            return (
                <div>
                  <Fruit data={value} />
                </div>
            )
          })
        }
    </div>
  );
}

export default App;
