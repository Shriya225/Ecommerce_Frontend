import '../styles/Heading.css';
import CardContainer from './CardContainer';
const LatestCollection = ({data,heading,title}) => {
  
    
    return (
        <div style={{"margin":"50px"}}>
            <h2 className='font'>{heading}</h2>
            <p className='font'>{title}</p>
            <CardContainer data={data}/>
        </div>
    );
}
export default LatestCollection;