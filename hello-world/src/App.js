import Animal from './Animal';
import Human from './Human';
import Car from './Car';

function App() {
  return (
    <div> 
         <Animal animal="dog"/>
         <Animal animal="cat"/>
         <Animal animal="fish"/>
         <Animal animal="horse"/>
         <Animal animal="turtle"/>
         <Human name="Freddo" location="California" />
         <Human name="Heathcliff" location="Broadway" />
         <Human name="Sea Captain" location="the open sea" />
         <Car />
    </div>
  );
}

export default App;
