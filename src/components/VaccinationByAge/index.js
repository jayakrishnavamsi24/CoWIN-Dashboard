import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeData} = props
  console.log(vaccinationByAgeData)

  return (
    <div className="vaccination-age-container">
      <h1> Vaccination by age </h1>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={vaccinationByAgeData}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{top: 300}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
