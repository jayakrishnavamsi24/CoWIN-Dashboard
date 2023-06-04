import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageData} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-cvg-container">
      <h1> Vaccination Coverage </h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={vaccinationCoverageData}
          margin={{
            top: 5,
            left: -30,
          }}
          width="100%"
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 0.1,
              fontSize: 10,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
              fontSize: 10,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="20%" />
          <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
