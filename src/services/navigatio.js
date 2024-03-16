import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  navigationRef?.dispatch(CommonActions.navigate(name, params));
}

export function back() {
  navigationRef?.goBack();
}

export function replace(name, params) {
  navigationRef?.dispatch(StackActions.replace(name, params));
}

export function push(name, params) {
  navigationRef?.dispatch(StackActions.push(name, params));
}

export function popToTop() {
  navigationRef?.dispatch(StackActions.popToTop());
}

export function getCurrentRoute() {
  return navigationRef.getCurrentRoute()?.name;
}
