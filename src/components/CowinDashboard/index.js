import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'

class CowinDashboard extends Component {
  state = {data: {}, isLoading: true, isRequestFailed: false}

  componentDidMount() {
    this.getVaccinationData()
  }

  onVaccinationDataSuccess = data => {
    const last7DaysVaccination = data.last_7_days_vaccination
    const vaccinationByAge = data.vaccination_by_age
    const vaccinationByGender = data.vaccination_by_gender
    const modLast7DaysVaccination = last7DaysVaccination.map(eachData => ({
      vaccineDate: eachData.vaccine_date,
      dose1: eachData.dose_1,
      dose2: eachData.dose_2,
    }))
    const modVaccinationByAge = vaccinationByAge.map(eachData => ({
      age: eachData.age,
      count: eachData.count,
    }))
    const modVaccinationByGender = vaccinationByGender.map(eachData => ({
      count: eachData.count,
      gender: eachData.gender,
    }))
    const modifiedData = {
      modLast7DaysVaccination,
      modVaccinationByAge,
      modVaccinationByGender,
    }
    this.setState({isLoading: false, data: modifiedData})
  }

  onRequestFail = () => {
    this.setState({isLoading: false, isRequestFailed: true})
  }

  getVaccinationData = async () => {
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(vaccinationDataApiUrl)
    if (response.ok) {
      const data = await response.json()
      this.onVaccinationDataSuccess(data)
    } else {
      this.onRequestFail()
    }
  }

  render() {
    const {isLoading, data, isRequestFailed} = this.state
    return (
      <div className="outer-container">
        <div className="bg-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="logo"
            />
            <p> Co-WIN </p>
          </div>
          <h1 className="title"> CoWIN Vaccination in India </h1>
          <div className="content-container">
            {isLoading && (
              <div data-testid="loader" className="loadingStyles">
                <Loader
                  type="ThreeDots"
                  color="#ffffff"
                  height={80}
                  width={80}
                />
              </div>
            )}
            {!isLoading && (
              <>
                <VaccinationCoverage
                  vaccinationCoverageData={data.modLast7DaysVaccination}
                />
                <VaccinationByGender
                  vaccinationByGenderData={data.modVaccinationByGender}
                />
                <VaccinationByAge
                  vaccinationByAgeData={data.modVaccinationByAge}
                />
              </>
            )}
            {isRequestFailed && (
              <div className="failed-view-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
                  alt="failure view"
                />
                <h1> Something went wrong </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default CowinDashboard
