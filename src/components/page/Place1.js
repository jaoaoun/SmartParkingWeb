import React, { useEffect , useState} from 'react'
import '../../css/indexApp.css'
import { 
  Container, 
  Row, 
  Col
 } from 'reactstrap'

 import axios from "axios"

 export const Place1 = () => {


  

  
    const [sensor,setSensor] = useState(null)
    
    useEffect(() => {
      // let sensor = []
      // firebase
      //   .database()
      //   .ref('Devices')
      //   .on('value', (data)=>{
      //     sensor = Object.values(data.val())
      //   })
      

      // checkSensor()
      console.log('aouงง')
    },[])
    
      // const checkSensor = async () => {
      //   let Sensor = await axios.get(`http://127.0.0.1:3100/`);
      //   console.log(Sensor,'aouงง')
      // }    

  
    return (
      <div>
        <Container>
          <Row>
            <h1 >Place1</h1>
          </Row>
          <Row>
            <Col sm={2}>
              <p>001</p>
              <img src={require('../../img/Grey.png')} alt="logo" className="car-logo" />
            </Col>
            <Col sm={2}>
              <p>002</p>
              <img src={require('../../img/Grey.png')} alt="logo" className="car-logo" />
            </Col>
            <Col sm={2}>
              <p>003</p>
              <img src={require('../../img/Grey.png')} alt="logo" className="car-logo" />
            </Col>
            <Col sm={2}>
              <p>004</p>
              <img src={require('../../img/Grey.png')} alt="logo" className="car-logo" />
            </Col>
            <Col sm={2}>
              <p>005</p>
              <img src={require('../../img/Grey.png')} alt="logo" className="car-logo" />
            </Col>
            <Col sm={2}>
              <p>006</p>
              <img src={require('../../img/Grey.png')} alt="logo" className="car-logo" />
            </Col>
          </Row>
          <Row>
            <p></p>
          </Row>
          <Row>
            <Col sm={2}>
              <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
              <p>007</p>
            </Col>
            <Col sm={2}>
              <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
              <p>008</p>
            </Col>
            <Col sm={2}>
              <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
              <p>009</p>
            </Col>
            <Col sm={2}>
              <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
              <p>010</p>
            </Col>
            <Col sm={2}>
              <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
              <p>011</p>
            </Col>
            <Col sm={2}>
              <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
              <p>012</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }


export default Place1