
import PredictionForm from './Predictionform'

function PredictionPage() {

  
 

   


//   const inputFields = [
//     { name: 'Temperature', label: 'Temperature (°C)', placeholder: 'e.g., 32', type: 'number', step: '0.1' },
//     { name: 'RH', label: 'Relative Humidity (%)', placeholder: 'e.g., 45', type: 'number', step: '1' },
//     { name: 'Ws', label: 'Wind Speed (km/h)', placeholder: 'e.g., 18', type: 'number', step: '0.1' },
//     { name: 'Rain', label: 'Rainfall (mm)', placeholder: 'e.g., 0', type: 'number', step: '0.1' },
//     { name: 'FFMC', label: 'FFMC Index', placeholder: 'e.g., 85.5', type: 'number', step: '0.1' },
//     { name: 'DMC', label: 'DMC Index', placeholder: 'e.g., 120', type: 'number', step: '0.1' },
//     { name: 'ISI', label: 'ISI Index', placeholder: 'e.g., 8.5', type: 'number', step: '0.1' }
//   ]

  return (
    <div className="flex-1 bg-stone-50 py-12">
      <PredictionForm/>
    </div>
  )
}

export default PredictionPage
