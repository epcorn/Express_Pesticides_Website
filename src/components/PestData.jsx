import data from '@/data/pestData.json'

function PestData() {
  const location = ``
  console.log(navigator.geolocation.getCurrentPosition)

  return (
    <div>
      
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </div>
  )
}

export default PestData
