import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { useRef } from 'react';
import { WebView } from 'react-native-webview';
import { back } from 'services/navigatio';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowLeft } from 'components/SVGComponent/ArrowLeft';
import { normalize } from 'global-styles/normalize';

const Webview = ({ route }) => {
  const { url } = route?.params;
  const insets = useSafeAreaInsets();
  const webViewRef = useRef();
  const handleNavigationStateChange = navState => {
    console.log(navState, 'navState');
  };

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <TouchableOpacity
        onPress={back}
        style={{
          height: 40,
          width: '100%',
          backgroundColor: '#ffffff',
          alignItems: 'center',
          paddingHorizontal: normalize(10),
          flexDirection: 'row',
          gap: 16,
        }}>
        <ArrowLeft />

        <Text style={{ fontWeight: 500, fontSize: 16 }}>Notification</Text>
      </TouchableOpacity>
      <WebView
        ref={webViewRef}
        source={{
          uri: url || 'https://adanas.am/',
        }}
        onError={() => back()}
        onHttpError={() => back()}
        onNavigationStateChange={handleNavigationStateChange}
        setSupportMultipleWindows={true}
        startInLoadingState
        renderLoading={() => (
          <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ActivityIndicator size={'large'} />
          </View>
        )}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default Webview;
