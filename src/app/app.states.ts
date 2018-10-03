import {IButtonBarConfiguration} from './button-bar/button-bar.configuration.interface';

export class AppStates {

  public static COMPONENT_BUTTON_BAR_CONFIG_DEFAULT: IButtonBarConfiguration = {
    name: 'button_bar_config_1',
    config: {
      saveButton: {
        title: 'Save',
        show: true
      },
      saveAndCloseButton: {
        title: 'Save',
        show: true
      },
      cancelButton: {
        title: 'Cancel',
        show: true
      }
    }
  };

  public static COMPONENT_BUTTON_BAR_CONFIG_BRANCH: IButtonBarConfiguration = {
    name: 'button_bar_config_2',
    config: {
      saveButton: {
        title: 'Speichern',
        show: true
      },
      saveAndCloseButton: {
        title: 'Speichern & Schließen',
        show: true
      },
      cancelButton: {
        title: 'Abbrechen',
        show: false
      }
    }
  };
}
