import messaging from '@react-native-firebase/messaging';
import NavigationService from '../Navigation/NavigationService';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken()
    }
}

const getFcmToken = async () => {

    try {
        const token = await messaging().getToken()
        console.log("fcm token:", token)
    } catch (error) {
        console.log("error in creating token")
    }

}

export async function notificationListeners() {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log('A new FCM message arrived!', remoteMessage);
    });


    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage,
        );

        if (!!remoteMessage?.data && remoteMessage?.data?.redirect_to == "ProductDetail") {
            setTimeout(() => {
                NavigationService.navigate("ProductDetail", {data: remoteMessage?.data})
            }, 1200);
        }

        if (!!remoteMessage?.data && remoteMessage?.data?.redirect_to == "Profile") {
            setTimeout(() => {
                NavigationService.navigate("Profile", {data: remoteMessage?.data})
            }, 1200);
        }
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );

            }
        });

    return unsubscribe;
}