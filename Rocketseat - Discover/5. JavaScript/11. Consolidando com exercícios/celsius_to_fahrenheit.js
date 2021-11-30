/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou
    fahrenheit e faça a transformação de uma unidade para
    outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/

function formatTemperature(temperatureFinal){
    final = Number(temperatureFinal).toFixed(1)
    return final
}

function temperatureConversion(temperature, to_convert){
    let conversion = String(to_convert).toUpperCase()
    let celsius 
    let fahrenheit
    let total

    if(conversion === "F"){
        celsius = temperature
        total = celsius * 9/5 + 32
        console.log(`${formatTemperature(celsius)} C equivale a ${formatTemperature(total)} F`)
    } else if(conversion === "C"){
        fahrenheit = temperature
        total = (fahrenheit - 32) * 5/9
        console.log(`${formatTemperature(fahrenheit)} F equivale a ${formatTemperature(total)} F`)
    }
}

temperatureConversion(37, 'f')
temperatureConversion(98, 'c')
temperatureConversion(32.6, 'f')
temperatureConversion(90.7, 'c')