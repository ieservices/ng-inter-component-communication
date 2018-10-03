import {AppStates} from './app.states';

export class AppReducer {
  public static BUTTON_BAR(configName) {
    switch (configName) {
      case 'config_default': {
        return AppStates.COMPONENT_BUTTON_BAR_CONFIG_DEFAULT;
      }

      case 'config_branch': {
        return AppStates.COMPONENT_BUTTON_BAR_CONFIG_BRANCH;
      }

      default: {
        return AppStates.COMPONENT_BUTTON_BAR_CONFIG_DEFAULT;
      }
    }
  }
}
