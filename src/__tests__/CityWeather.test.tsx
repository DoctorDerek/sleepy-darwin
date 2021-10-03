import CityWeather, { KtoF } from "@/src/components/CityWeather"
import { server } from "@/src/utils/setup-tests"
import { render, screen, waitFor } from "@testing-library/react"

const currentWeatherConditions = "Overcast clouds"
const currentTemperatureInKelvin = 295.372
const currentTemperatureInFahrenheit = 72

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

function renderCityWeather(city?: string) {
  if (city) return render(<CityWeather city={city} />)
  render(<CityWeather />)
}

test("KtoF conversion function works correctly", () => {
  expect(KtoF(currentTemperatureInKelvin)).toBe(currentTemperatureInFahrenheit)
})

test("<CityWeather> renders nothing with default props", () => {
  renderCityWeather()
  expect(screen.queryByText(/Temp/i)).toBeNull() // Temperature
})

test("<CityWeather> renders correctly with prop city='Memphis'", async () => {
  const city = "Memphis"
  renderCityWeather(city)
  await waitFor(() => expect(screen.getByText(/loading/i)).toBeVisible())
  await waitFor(() => expect(screen.getByText(/Temp/i)).toBeVisible()) // Temperature
  expect(screen.getByText(new RegExp(city, "i"))).toBeVisible()
  expect(
    screen.getByText(new RegExp(currentWeatherConditions, "i"))
  ).toBeVisible()
  expect(
    screen.getByText(new RegExp(`${currentTemperatureInFahrenheit}°`, "i"))
  ).toBeVisible()
})

test("<CityWeather> renders 'not found' with prop city='FakeCity'", async () => {
  const city = "FakeCity"
  renderCityWeather(city)
  await waitFor(() => expect(screen.getByText(/loading/i)).toBeVisible())
  await waitFor(() => expect(screen.getByText(/not found/i)).toBeVisible())
  expect(screen.getByText(/error/i)).toBeVisible()
  expect(screen.queryByText(new RegExp(city, "i"))).toBeNull()
  expect(screen.queryByText(/Temp/i)).toBeNull() // Temperature
})
