import { City, Weather } from "@core/models";
import { useColors } from "@src/core/slices";
import dayjs from "dayjs";
import React, { useMemo } from "react";
import { style } from "../style";
import { View } from "react-native";
import { AppImage, AppSpinner, AppText, Row } from "@core/common";
import { getTempCelsiusFromKelvin, getWeatherImage } from "@src/core/utils";


interface Props {
    weather?: Weather,
    city: City,
    isLoading: boolean
}

export const CityDetailsComponent: React.FC<Props> = ({ city, isLoading, weather }) => {

    const icon = getWeatherImage({ icon: weather?.weather?.[0]?.icon as string })
    const temp = getTempCelsiusFromKelvin({ kelvin: (weather?.main?.temp as number) - 273.15 })
    const WindSpeed = ((weather?.wind?.speed as number) * 3.6).toFixed(1) + ' km/h';
    const date = dayjs(weather?.dt as number).format('DD.MM.YYYY - HH:mm');
    const colors = useColors();
    const styles = useMemo(() => style(colors), [colors]);



    if (isLoading)
        return <View style={styles.container}>
            <View style={[styles.innerContainer]}>
                <AppText value={`${city.cityName}, ${city.countryCode}`} size={24} />

                <View style={[styles.center]}>
                    <AppSpinner />
                </View>
            </View>
        </View>



    return (<>
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <AppText value={`${city.cityName}, ${city.countryCode}`} size={24} />

                <View style={styles.center}>
                    <AppImage source={{ uri: icon }} style={styles.icon} />
                </View>

                <View >
                    <Row style={styles.rowSpaceBetween}>
                        <AppText weight="bold" value={'Description'} />
                        <AppText variant="primary" weight="normal" size={20} value={weather?.weather?.[0]?.description} />
                    </Row>
                    <Row style={styles.rowSpaceBetween}>
                        <AppText weight="bold" value={'Temperature'} />
                        <AppText variant="primary" weight="normal" size={20} value={temp} />
                    </Row>
                    <Row style={styles.rowSpaceBetween}>
                        <AppText weight="bold" value={'Humidity'} />
                        <AppText variant="primary" weight="normal" size={20} value={weather?.main?.humidity + '%'} />
                    </Row>
                    <Row style={styles.rowSpaceBetween}>
                        <AppText weight="bold" value={'Windspeed'} />
                        <AppText variant="primary" weight="normal" size={20} value={WindSpeed} />
                    </Row>
                </View>
            </View>

        </View>
        <View style={styles.footerContainer}>
            <AppText
                style={styles.footerText}
                variant="textSecondary"
                weight="400"
                size={12}
                value={`Weather information for ${city.cityName} received on`}
            />
            <AppText
                style={styles.footerText}
                variant="textSecondary"
                weight="400"
                size={12}
                value={date}
            />
        </View>
    </>
    )
}