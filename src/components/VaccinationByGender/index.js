import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderData} = props
  console.log(vaccinationByGenderData)

  return (
    <div className="vaccination-gnd-container">
      <h1> Vaccination by gender </h1>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByGenderData}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{top: 270}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
