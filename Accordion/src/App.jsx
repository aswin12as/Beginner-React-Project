import Accordion from './Components.js/Accordion';
import { accordionData } from './utils/content';

const App = () => {
  return (
    <div className='container'>
      <div className='accordion'>
        {accordionData.map((item,index) => 
        <Accordion key={index} 
        title={item.title} 
        content={item.content} 
        /> 
        )}
      </div>
    </div>
  );
}

export default App;