

export const getWeatherImage = ({ icon }: { icon: string }) => `http://openweathermap.org/img/w/${icon}.png`;

export const getTempCelsiusFromKelvin = ({ kelvin }: { kelvin: number }) => (kelvin - 273.15).toFixed() + '° C';