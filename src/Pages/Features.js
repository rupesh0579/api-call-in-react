import React from 'react'

const Features = () => {
  return (
    <>
    
      <div>Road Map For Training:<br/><br/>
    1)We are creating MERN application to implement user management system.<br/>
    2)we are providing the feature for registration and to save the record in the backend we are using restfull service.<br/>
    3)To create the restfull service we are using NodeJS as a server side language and to create this service we are using Express.js.<br/>
    4)MongoDB for DataBase <br/><br/>
    
    
    UI: ReactJS , JavaScript , BootStrap, HTML NodeJS + Express.js + MongoDB <br/> 
                   HTTP SERVICE / RESTFULL SERVICE<br/>
    
    Routing(VIMP) , Axios , FormArchetecture , FormValidations , Props , State , Redux .<br/>
    
    
    
    Steps for creating Restfull service:<br/><br/>
    
    1) npm i --save  express      -(package for creating restfull / http service)<br/>
    2) npm i --save nodemon       -(package for restarting the service automatically)<br/>
    3) npm i --save mongoose      -(package to connect to mongo database for CRUD Operations)<br/>
    4) npm i --save cors          -(provides authentication for suporting cross port archetecture)<br/>
    5) npm i --save body-parser  -(supprorts http request or http response)<br/>
    
    
    
    
    Date : 18 / 08/ 2022<br/>
    Installed all the major packages for creating the restfull services <br/>
    
    Node JS + Express JS + MongoDB<br/>
    Prerequesite:  CallBack <br/><br/>
    
    Step 1 : we have to write a program to connect mongoDataBASE <br/>
             mongodb://localhost:27017/merndb'<br/>
    Step 2 : Express.js is a library for creating the http service know as restfull service <br/>
    Step 3 : we have to create major 3 end points<br/>
            a) Register End Point (i.e http:localhost:8800/register)<br/>
            b) Login End Point (i.e http:localhost:8800/login)<br/>
            once login is done successfully then we have to provide this below <br/>
            c) Home/Dashboard End Point (i.e http:localhost:8800/home)<br/><br/><br/>
    
    
    React : <br/>
    we have to provide 3 major components <br/>
     1)Register component<br/>
     2)login component<br/>
     3) home/dashboard component<br/>
     4) routing concept<br/>
     5) Navigation<br/>
     6) proper command on creatiing forms with validations <br/>
     </div>
    </>
  )
}

export default Features;