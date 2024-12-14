import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

interface CityData {
    name: string;
    country: string;
    temperature: number;
}

interface Props {
    onSearch: (cityName: string) => Promise<CityData | null>;
}

export const CitySearch: React.FC<Props> = ({ onSearch }) => {
    const [cityName, setCityName] = useState('');
    const [cityData, setCityData] = useState<CityData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        if (!cityName.trim()) {
            setError('Please enter a city name');
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            const result = await onSearch(cityName);
            if (result) {
                setCityData(result);
            } else {
                setError('City not found');
            }
        } catch (err) {
            setError('Error searching for city');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                testID="city-input"
                style={styles.input}
                value={cityName}
                onChangeText={setCityName}
                placeholder="Enter city name"
                onSubmitEditing={handleSearch}
                returnKeyType="search"
            />

            {isLoading && (
                <ActivityIndicator 
                    testID="loading-indicator"
                    size="large"
                    style={styles.loader}
                />
            )}

            {error && (
                <Text testID="error-message" style={styles.error}>
                    {error}
                </Text>
            )}

            {cityData && (
                <View testID="city-data" style={styles.dataContainer}>
                    <Text style={styles.cityName}>
                        {cityData.name}, {cityData.country}
                    </Text>
                    <Text style={styles.temperature}>
                        Temperature: {cityData.temperature}°C
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
    },
    loader: {
        marginVertical: 20,
    },
    error: {
        color: 'red',
        marginBottom: 16,
    },
    dataContainer: {
        padding: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
    },
    cityName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    temperature: {
        fontSize: 16,
    },
});
