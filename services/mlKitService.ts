import TextRecognition from '@react-native-ml-kit/text-recognition';


export const scannedText = async(imagePath:string) => {
    try {
        const result = await TextRecognition.recognize(imagePath);
        console.log('Scanned Text:', result);
        return result;
    }
    catch (error) {
        console.error('Error scanning text: ', error);
        throw error;
    }
}